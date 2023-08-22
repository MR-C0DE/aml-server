import { CategoriesProduits } from "../model/categoriesProduits.js";
import Validation from "../validation/validation.js";

class CategoriesProduitsController {
  static async getCategoriesProduits(request, response) {
    try {
      const categories = await CategoriesProduits.selectCategoriesProduits();
      response.status(200).json(categories);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting categories produits.");
    }
  }

  static async createCategorieProduit(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { nom, description, id_entreprise } = request.body;

    try {
      const result = await CategoriesProduits.insertCategorieProduit(
        nom,
        description,
        id_entreprise
      );
      response
        .status(201)
        .json({
          message: "Categorie produit created successfully.",
          id: result.insertId,
        });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating categorie produit.");
    }
  }

  static async updateCategorieProduit(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { nom, description, id_entreprise } = request.body;

    try {
      const result = await CategoriesProduits.updateCategorieProduit(
        id,
        nom,
        description,
        id_entreprise
      );
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Categorie produit with ID ${id} not found.` });
      } else {
        response
          .status(200)
          .json({ message: "Categorie produit updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating categorie produit.");
    }
  }

  static async deleteCategorieProduit(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const result = await CategoriesProduits.deleteCategorieProduit(id);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Categorie produit with ID ${id} not found.` });
      } else {
        response
          .status(200)
          .json({ message: "Categorie produit deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting categorie produit.");
    }
  }

  static async getCategorieProduitById(request, response) {
    
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const categorie = await CategoriesProduits.getCategorieProduitById(id);
      if (!categorie) {
        response
          .status(404)
          .json({ message: `Categorie produit with ID ${id} not found.` });
      } else {
        response.status(200).json(categorie);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting categorie produit.");
    }
  }

  // Additional methods
  static async getProduitsInCategorie(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { categorieId } = request.params;

    try {
      const produits = await CategoriesProduits.getProduitsInCategorie(
        categorieId
      );
      response.status(200).json(produits);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting produits in categorie.");
    }
  }
}

export { CategoriesProduitsController };
