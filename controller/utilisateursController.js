import { Utilisateurs } from "../model/utilisateurs.js";
import bcrypt from "bcrypt";
import Validation from "../validation/validation.js";

class UtilisateursController {
  // Récupère tous les utilisateurs
  static async getUtilisateurs(request, response) {
    try {
      const utilisateurs = await Utilisateurs.selectUtilisateurs();
      response.status(200).json(utilisateurs);
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send("Erreur lors de la récupération des utilisateurs.");
    }
  }

  // Récupère un utilisateur par son id
  static async getUtilisateurById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const utilisateur = await Utilisateurs.getUtilisateurById(
        request.params.id
      );
      if (utilisateur) {
        response.status(200).json(utilisateur);
      } else {
        response.status(404).send("Utilisateur non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send("Erreur lors de la récupération de l'utilisateur.");
    }
  }

  // Récupère un utilisateur par son matricule
  static async getUtilisateurByMatricule(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const utilisateur = await Utilisateurs.getUtilisateurByMatricule(
        request.params.matricule
      );
      if (utilisateur) {
        response.json(utilisateur);
      } else {
        response.status(404).send("Utilisateur non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send("Erreur lors de la récupération de l'utilisateur.");
    }
  }

  // Crée un nouvel utilisateur
  static async createUtilisateur(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { password, statut, id_employe } = request.body;
    try {
      // Cryptage du mot de passe
      const hashedPassword = await bcrypt.hash(password, 10); // Utilisation d'un salt de 10

      // Insertion de l'utilisateur dans la base de données avec le mot de passe crypté
      const utilisateur = await Utilisateurs.insertUtilisateur(
        hashedPassword,
        statut,
        id_employe
      );
      response.status(201).json(utilisateur);
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la création de l'utilisateur.");
    }
  }

  // Modifie un utilisateur existant
  static async updateUtilisateur(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { matricule, password, employe_id } = request.body;
    try {
      const utilisateur = await Utilisateur.updateUtilisateur(
        request.params.id,
        matricule,
        password,
        employe_id
      );
      if (utilisateur) {
        response.json(utilisateur);
      } else {
        response.status(404).send("Utilisateur non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send("Erreur lors de la mise à jour de l'utilisateur.");
    }
  }

  // Supprime un utilisateur existant
  static async deleteUtilisateur(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const utilisateur = await Utilisateurs.deleteUtilisateur(
        request.params.id
      );
      if (utilisateur) {
        response.json({ message: "Utilisateur supprimé avec succès." });
      } else {
        response.status(404).send("Utilisateur non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send("Erreur lors de la suppression de l'utilisateur.");
    }
  }

  
}

export { UtilisateursController };
