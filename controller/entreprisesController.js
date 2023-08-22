import { Entreprises } from "../model/entreprises.js";
import Validation from "../validation/validation.js";

class EntreprisesController {
  static async getEntreprises(request, response) {
    try {
      const entreprises = await Entreprises.selectEntreprises();
      response.status(200).json(entreprises);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting entreprises.");
    }
  }

  static async createEntreprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { nom, pays, ville, adresse, telephone, email, site_web } =
      request.body;
    const statut = "En attente";
    const matricule = await Entreprises.generateUniqueMatricule();
    try {
      const result = await Entreprises.insertEntreprise(
        nom,
        pays,
        ville,
        adresse,
        telephone,
        email,
        site_web,
        matricule,
        statut
      );
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating entreprise.");
    }
  }

  static async updateEntreprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const {
      id,
      nom,
      pays,
      ville,
      adresse,
      telephone,
      email,
      site_web,
      matricule,
      statut,
    } = request.body;

    try {
      const result = await Entreprises.updateEntreprise(
        id,
        nom,
        pays,
        ville,
        adresse,
        telephone,
        email,
        site_web,
        matricule,
        statut
      );
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating entreprise.");
    }
  }

  static async deleteEntreprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const result = await Entreprises.deleteEntreprise(id);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting entreprise.");
    }
  }

  static async getEntrepriseById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const entreprise = await Entreprises.getEntrepriseById(id);
      response.status(200).json(entreprise);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting entreprise by ID.");
    }
  }

  static async getEntreprisesInCountry(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { country } = request.params;

    try {
      const entreprises = await Entreprises.getEntreprisesInCountry(country);
      response.status(200).json(entreprises);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting entreprises in country.");
    }
  }

  static async getEntreprisesWithStatus(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { status } = request.params;

    try {
      const entreprises = await Entreprises.getEntreprisesWithStatus(status);
      response.status(200).json(entreprises);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting entreprises with status.");
    }
  }
}

export { EntreprisesController };
