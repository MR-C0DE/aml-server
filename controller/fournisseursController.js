import { Fournisseurs } from "../model/fournisseurs.js";
import Validation from "../validation/validation.js";

class FournisseursController {
  static async getFournisseurs(request, response) {
    try {
      const fournisseurs = await Fournisseurs.selectFournisseurs();
      response.status(200).json(fournisseurs);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting fournisseurs.");
    }
  }

  static async createFournisseur(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { nom, adresse, telephone, email, id_entreprise } = request.body;
    try {
      const result = await Fournisseurs.insertFournisseur(
        nom,
        adresse,
        telephone,
        email,
        id_entreprise
      );
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating fournisseur.");
    }
  }

  static async updateFournisseur(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { nom, adresse, telephone, email, id_entreprise } = request.body;
    try {
      const result = await Fournisseurs.updateFournisseur(
        id,
        nom,
        adresse,
        telephone,
        email,
        id_entreprise
      );
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating fournisseur.");
    }
  }

  static async deleteFournisseur(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const result = await Fournisseurs.deleteFournisseur(id);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting fournisseur.");
    }
  }

  static async getFournisseurById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const fournisseur = await Fournisseurs.getFournisseurById(id);
      response.status(200).json(fournisseur);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting fournisseur by ID.");
    }
  }

  static async getFournisseursByEntreprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id_entreprise } = request.params;
    try {
      const fournisseurs = await Fournisseurs.getFournisseursByEntreprise(
        id_entreprise
      );
      response.status(200).json(fournisseurs);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting fournisseurs by entreprise.");
    }
  }
}

export { FournisseursController };
