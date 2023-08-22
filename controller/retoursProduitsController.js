import { RetoursProduits } from "../model/retoursProduits.js";
import Validation from "../validation/validation.js";

class RetoursProduitsController {
  static async getRetoursProduits(request, response) {
    try {
      const retoursProduits = await RetoursProduits.selectRetoursProduits();
      response.status(200).json(retoursProduits);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting retours produits.");
    }
  }

  static async createRetourProduit(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id_vente, id_produit, quantite, raison, date_retour } =
      request.body;
    try {
      const result = await RetoursProduits.insertRetourProduit(
        id_vente,
        id_produit,
        quantite,
        raison,
        date_retour
      );
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating retour produit.");
    }
  }

  static async updateRetourProduit(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const id = request.params.id;
    const { id_vente, id_produit, quantite, raison, date_retour } =
      request.body;
    try {
      const result = await RetoursProduits.updateRetourProduit(
        id,
        id_vente,
        id_produit,
        quantite,
        raison,
        date_retour
      );
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating retour produit.");
    }
  }

  static async deleteRetourProduit(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const id = request.params.id;
    try {
      const result = await RetoursProduits.deleteRetourProduit(id);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting retour produit.");
    }
  }

  static async getRetourProduitById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const id = request.params.id;
    try {
      const retourProduit = await RetoursProduits.getRetourProduitById(id);
      response.status(200).json(retourProduit);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting retour produit by ID.");
    }
  }

  static async getRetoursProduitsByVente(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const venteId = request.params.venteId;
    try {
      const retoursProduits = await RetoursProduits.getRetoursProduitsByVente(
        venteId
      );
      response.status(200).json(retoursProduits);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting retours produits by vente.");
    }
  }
}

export { RetoursProduitsController };
