import { HistoriquePrix } from "../model/historiquePrix.js";
import Validation from "../validation/validation.js";

class HistoriquePrixController {
  static async getHistoriquePrix(request, response) {
    try {
      const historiquePrix = await HistoriquePrix.selectHistoriquePrix();
      response.status(200).json(historiquePrix);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting historique prix.");
    }
  }

  static async createHistoriquePrix(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id_produit, prix_unitaire } = request.body;

    try {
      const result = await HistoriquePrix.insertHistoriquePrix(
        id_produit,
        prix_unitaire
      );
      response
        .status(201)
        .json({
          id: result.insertId,
          message: "Historique prix created successfully.",
        });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating historique prix.");
    }
  }

  static async updateHistoriquePrix(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { prix_unitaire } = request.body;

    try {
      await HistoriquePrix.updateHistoriquePrix(id, prix_unitaire);
      response
        .status(200)
        .json({ id, message: "Historique prix updated successfully." });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating historique prix.");
    }
  }

  static async deleteHistoriquePrix(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      await HistoriquePrix.deleteHistoriquePrix(id);
      response
        .status(200)
        .json({ id, message: "Historique prix deleted successfully." });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting historique prix.");
    }
  }

  static async getHistoriquePrixById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const historiquePrix = await HistoriquePrix.getHistoriquePrixById(id);
      if (historiquePrix) {
        response.status(200).json(historiquePrix);
      } else {
        response.status(404).send("Historique prix not found.");
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting historique prix by ID.");
    }
  }

  static async getProductPriceHistory(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { productId } = request.params;

    try {
      const priceHistory = await HistoriquePrix.getProductPriceHistory(
        productId
      );
      response.status(200).json(priceHistory);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting product price history.");
    }
  }
}

export { HistoriquePrixController };
