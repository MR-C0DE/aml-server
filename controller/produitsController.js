import { Produits } from "../model/produits.js";
import Validation from "../validation/validation.js";

class ProduitsController {
  static async getProduits(request, response) {
    try {
      const produits = await Produits.selectProduits();
      response.status(200).json(produits);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting produits.");
    }
  }

  static async createProduit(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const {
        nom,
        description,
        quantite,
        prix_unitaire,
        seuil,
        code_produit,
        categorie_produit,
        id_succursale,
      } = request.body;

      const result = await Produits.insertProduit(
        nom,
        description,
        quantite,
        prix_unitaire,
        seuil,
        code_produit,
        categorie_produit,
        id_succursale
      );

      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating produit.");
    }
  }

  static async updateProduit(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { id } = request.params;
      const { quantite, prix_unitaire, seuil } = request.body;

      const result = await Produits.updateProduit(
        id,
        quantite,
        prix_unitaire,
        seuil
      );

      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating produit.");
    }
  }

  static async deleteProduit(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { id } = request.params;

      const result = await Produits.deleteProduit(id);

      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting produit.");
    }
  }

  static async getProduitById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { id } = request.params;

      const produit = await Produits.getProduitById(id);

      if (produit) {
        response.status(200).json(produit);
      } else {
        response.status(404).send("Produit not found.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting produit by ID.");
    }
  }

  static async getProduitsByCategorie(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { categorieId } = request.params;

      const produits = await Produits.getProduitsByCategorie(categorieId);

      response.status(200).json(produits);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting produits by categorie.");
    }
  }

  static async getProduitsBySuccursale(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { succursaleId } = request.params;

      const produits = await Produits.getProduitsBySuccursale(succursaleId);

      response.status(200).json(produits);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting produits by succursale.");
    }
  }
}

export { ProduitsController };
