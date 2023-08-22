import AuthUtils from "../configuration/auth.js";
import { Utilisateurs } from "../model/utilisateurs.js";
import bcrypt from 'bcrypt';
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
      response.status(500).json({ message: 'Internal server error' });
    }
  }

  static async connexion(request, response) {
    const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const userData = request.body;

    if (!userData || !userData.matricule || !userData.password) {
      return response.status(400).json({ message: 'Invalid data sent' });
    }

    try {
      const userResponse = await Utilisateurs.getUtilisateurByMatricule(userData.matricule);

      if (!userResponse) {
        return response.status(404).json({ message: 'Matricule not found' });
      }

      const passwordMatch = await bcrypt.compare(userData.password, userResponse.password);

      if (!passwordMatch) {
        return response.status(401).json({ message: 'Invalid password' });
      }

      const token = AuthUtils.generateToken(userResponse); // Assuming userResponse contains user data
      response.status(200).json({ token });
    } catch (error) {
      response.status(500).json({ message: 'Internal server error' });
    }
  }
}

export { LoginController };
