import { TransfertsProduits } from "../model/transfertsProduits.js";

class TransfertsProduitsController {
  static async getTransfertsProduits(request, response) {
    try {
      const transfertsProduits = await TransfertsProduits.selectTransfertsProduits();
      response.status(200).json(transfertsProduits);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting transferts produits.");
    }
  }

  static async createTransfertProduit(request, response) {
    try {
      const transfertData = request.body; // Assuming you're using a middleware to parse the request body
      const result = await TransfertsProduits.insertTransfertProduit(transfertData);
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating transfert produit.");
    }
  }

  static async updateTransfertProduit(request, response) {
    try {
      const id = request.params.id; // Assuming the ID is provided in the URL
      const transfertData = request.body;
      await TransfertsProduits.updateTransfertProduit(id, transfertData);
      response.status(200).send("Transfert produit updated.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating transfert produit.");
    }
  }

  static async deleteTransfertProduit(request, response) {
    try {
      const id = request.params.id; // Assuming the ID is provided in the URL
      await TransfertsProduits.deleteTransfertProduit(id);
      response.status(200).send("Transfert produit deleted.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting transfert produit.");
    }
  }

  static async getTransfertProduitById(request, response) {
    try {
      const id = request.params.id; // Assuming the ID is provided in the URL
      const transfertProduit = await TransfertsProduits.getTransfertProduitById(id);
      response.status(200).json(transfertProduit);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting transfert produit by ID.");
    }
  }

  static async getTransfertsByProductId(request, response) {
    try {
      const productId = request.params.productId; // Assuming the product ID is provided in the URL
      const transferts = await TransfertsProduits.getTransfertsByProductId(productId);
      response.status(200).json(transferts);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting transferts by product ID.");
    }
  }
}

export { TransfertsProduitsController };
