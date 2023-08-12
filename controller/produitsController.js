import { Produits } from "../model/produits.js";

class ProduitsController {
  // Récupère tous les produits
  static async getProduits(request, response) {
    try {
      const produits = await Produits.selectProduits();
      response.status(200).json(produits);
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la récupération des produits.");
    }
  }

  // Récupère un produit par son ID
  static async getProduitById(request, response) {
    try {
      const produit = await Produits.getProduitById(request.params.id);
      if (produit) {
        response.status(200).json(produit);
      } else {
        response.status(404).send("Produit non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la récupération du produit.");
    }
  }

  // Récupère un produit par son code produit
  static async getProduitByCodeProduit(request, response) {
    try {
      const produit = await Produits.getProduitByCodeProduit(request.params.code_produit);
      if (produit) {
        response.json(produit);
      } else {
        response.status(404).send("Produit non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la récupération du produit.");
    }
  }

  // Récupère un produit par son id type
  static async getProduitByIdType(request, response) {
    try {
      const produits = await Produits.getProduitByIdType(request.params.id_type);
      if (produits) {
        response.json(produits);
      } else {
        response.status(404).send("Produit non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la récupération du produit.");
    }
  }

  // Récupère un produit par son id succursale
  static async getProduitByIdSuccursale(request, response) {
    try {
      const produits = await Produits.getProduitByIdSuccursale(request.params.id_succursale);
      if (produits) {
        response.json(produits);
      } else {
        response.status(404).send("Produit non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la récupération du produit.");
    }
  }

  // Crée un nouveau produit
  static async createProduit(request, response) {
    const {
      nom,
      description,
      quantite,
      prix_unitaire,
      id_type_produit,
      seuil,
      code_produit,
      id_succursale
    } = request.body;
    try {
      const produit = await Produits.insertProduit(
        nom,
        description,
        quantite,
        prix_unitaire,
        id_type_produit,
        seuil,
        code_produit,
        id_succursale
      );
      response.status(201).json(produit);
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la création du produit.");
    }
  }

  // Met à jour un produit existant
  static async updateProduit(request, response) {
    const {
      nom,
      description,
      quantite,
      prix_unitaire,
      seuil,
      code_produit,
      id_succursale
    } = request.body;
    try {
      const produit = await Produits.updateProduit(
        request.params.id,
        nom,
        description,
        quantite,
        prix_unitaire,
        seuil,
        code_produit,
        id_succursale
      );
      if (produit) {
        response.json(produit);
      } else {
        response.status(404).send("Produit non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la mise à jour du produit.");
    }
  }

  // Supprime un produit existant
  static async deleteProduit(request, response) {
    try {
      const produit = await Produits.deleteProduit(request.params.id);
      if (produit) {
        response.json({ message: "Produit supprimé avec succès." });
      } else {
        response.status(404).send("Produit non trouvé.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Erreur lors de la suppression du produit.");
    }
  }
}

export { ProduitsController };
