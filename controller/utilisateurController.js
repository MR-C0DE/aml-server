import { Utilisateur } from "../model/utilisateur.js";

class UtilisateurController {
  
  // Récupère tous les utilisateurs
  static async getUtilisateurs(request, response) {
    try {
      const utilisateurs = await Utilisateur.selectUtilisateurs();
      response.status(200).json(utilisateurs);
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la récupération des utilisateurs.");
    }
  }

  // Récupère un utilisateur par son id
  static async getUtilisateurById(request, response) {
    try {
      const utilisateur = await Utilisateur.getUtilisateurById(request.params.id);
      if (utilisateur) {
        response.status(200).json(utilisateur);
      } else {
        response.status(404).send("Utilisateur non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la récupération de l'utilisateur.");
    }
  }

    // Récupère un utilisateur par son matricule
    static async getUtilisateurByMatricule(request, response) {
        try {
          const utilisateur = await Utilisateur.getUtilisateurByMatricule(request.params.matricule);
          if (utilisateur) {
            response.json(utilisateur);
          } else {
            response.status(404).send("Utilisateur non trouvé.");
          }
        } catch (error) {
          console.error(error);
          response.status(500).send("Erreur lors de la récupération de l'utilisateur.");
        }
      }

  // Crée un nouvel utilisateur
  static async createUtilisateur(request, response) {
    const { matricule, password, employe_id } = request.body;
    try {
      const utilisateur = await Utilisateur.insertUtilisateur(matricule, password, employe_id);
      response.status(201).json(utilisateur);
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la création de l'utilisateur.");
    }
  }

  // Modifie un utilisateur existant
  static async updateUtilisateur(request, response) {
    const { matricule, password, employe_id } = request.body;
    try {
      const utilisateur = await Utilisateur.updateUtilisateur(request.params.id, matricule, password, employe_id);
      if (utilisateur) {
        response.json(utilisateur);
      } else {
        response.status(404).send("Utilisateur non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la mise à jour de l'utilisateur.");
    }
  }

  // Supprime un utilisateur existant
  static async deleteUtilisateur(request, response) {
    try {
      const utilisateur = await Utilisateur.deleteUtilisateur(request.params.id);
      if (utilisateur) {
        response.json({ message: "Utilisateur supprimé avec succès." });
      } else {
        response.status(404).send("Utilisateur non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la suppression de l'utilisateur.");
    }
  }

}

export { UtilisateurController };
