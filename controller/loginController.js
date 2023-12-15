import AuthUtils from "../configuration/auth.js";
import { Utilisateurs } from "../model/utilisateurs.js";
import { Entreprises } from "../model/entreprises.js";

import bcrypt from "bcrypt";
import Validation from "../validation/validation.js";


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

  static async checkin(request, response) {
   
    const { matricule } = request.params;

    try { 
      const resultat = await Entreprises.checkEntreprise(matricule);
      
      response.status(200).json({ valid: resultat.valid, message: resultat.message  });
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

      const entreprise = await Entreprises.getEntrepriseById(userResponse.id_entreprise);
      if(!entreprise){
        response.status(500).json({ message: "Failed auth: entriprise not found" });
      }

      const check = await Entreprises.checkEntreprise(entreprise.matricule);

      console.log(check);

      const token = AuthUtils.generateToken(userResponse);
      response.status(200).json({ token });
    } catch (error) {
      response.status(500).json({ message: "Internal server error" });
    }
  }

}

export { LoginController };
