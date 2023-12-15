import AuthUtils from "../configuration/auth.js";
import { Utilisateurs } from "../model/utilisateurs.js";
import { Entreprises } from "../model/entreprises.js";
import { PeriodesEssai } from "../model/periodesEssai.js";

import bcrypt from "bcrypt";
import Validation from "../validation/validation.js";
import { Abonnements } from "../model/abonnements.js";

class LoginController {
  static async connect(request, response) {
    const user = {
      id: 1,
    };

    try {
      const token = AuthUtils.generateToken(user);
      response.status(200).json({ token });
    } catch (error) {
      response.status(500).json({ message: "Internal server error" });
    }
  }

  static async connexion(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }

    const userData = request.body;

    if (!userData || !userData.matricule || !userData.password) {
      return response.status(400).json({ message: "Invalid data sent" });
    }

    try {
      const userResponse = await Utilisateurs.getUtilisateurByMatricule(userData.matricule);

      if (!userResponse) {
        return response.status(404).json({ message: "Matricule not found" });
      }

      const passwordMatch = await bcrypt.compare(userData.password, userResponse.password);

      if (!passwordMatch) {
        return response.status(401).json({ message: "Invalid password" });
      }

      const token = AuthUtils.generateToken(userResponse);
      response.status(200).json({ token });
    } catch (error) {
      response.status(500).json({ message: "Internal server error" });
    }
  }

  static async checkEntreprise(matricule) {
    try {
      const entreprise = await Entreprises.getEntrepriseByMatricule(matricule);

      if (!entreprise) {
        return { valid: false, message: "Entreprise not found" };
      }

      if (entreprise.statut === "essai") {
        return await LoginController.checkTrialPeriod(entreprise);
      } else if (entreprise.statut === "invalide") {
        return { valid: false, message: "Invalid subscription" };
      } else if (entreprise.statut === 'Actif') {
        return await LoginController.checkActiveSubscription(entreprise);
      }

      return { valid: false, message: "Invalid subscription or trial period expired" };
    } catch (error) {
      console.error("Error checking entreprise:", error);
      return { valid: false, message: "Internal server error" };
    }
  }

  static async checkTrialPeriod(entreprise) {
    const periodeEssai = await PeriodesEssai.getPeriodeEssaiByEntrepriseId(entreprise.id);

    if (periodeEssai) {
      const date_debut = new Date(periodeEssai.date_debut);
      const date_actuel = new Date();
      const duree = PeriodesEssai.differenceInMonths(date_debut, date_actuel);

      if (duree <= 0) {
        entreprise.statut = "Actif";
        const { id, nom, pays, adresse, telephone, email, site_web, matricule, statut } = entreprise;
        const result = await Entreprises.updateEntreprise(id, nom, pays, adresse, telephone, email, site_web, matricule, statut);

        if (result) {
          return await LoginController.checkEntreprise(entreprise.id);
        }
      }

      return { valid: true };
    }

    return { valid: true, message: null };
  }

  static async checkActiveSubscription(entreprise) {
    const abonnement = await Abonnements.getAbonnementByIdEntreprise(entreprise.id);

    if (abonnement) {
      const date_debut = new Date(abonnement.date_debut);
      const date_actuel = new Date();
      const duree = PeriodesEssai.differenceInMonths(date_debut, date_actuel);

      if (duree <= 0) {
        entreprise.statut = "invalid";
        const { id, nom, pays, adresse, telephone, email, site_web, matricule, statut } = entreprise;
        const result = await Entreprises.updateEntreprise(id, nom, pays, adresse, telephone, email, site_web, matricule, statut);

        if (result) {
          return await LoginController.checkEntreprise(entreprise.id);
        }
      }
    }

    return {
      valid: false,
      message: "Invalid subscription or trial period expired",
    };
  }
}

export { LoginController };
