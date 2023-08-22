import { HistoriqueModifications } from "../model/historiqueModifications.js";
import Validation from "../validation/validation.js";

class HistoriqueModificationsController {
  static async getHistoriqueModifications(request, response) {
    try {
      const historiqueModifications =
        await HistoriqueModifications.selectHistoriqueModifications();
      response.status(200).json(historiqueModifications);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting historique modifications.");
    }
  }

  static async createHistoriqueModification(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const data = request.body;
    try {
      const result = await HistoriqueModifications.insertHistoriqueModification(
        data
      );
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating historique modification.");
    }
  }

  static async updateHistoriqueModification(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const id = request.params.id;
    const data = request.body;
    try {
      const result = await HistoriqueModifications.updateHistoriqueModification(
        id,
        data
      );
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating historique modification.");
    }
  }

  static async deleteHistoriqueModification(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const id = request.params.id;
    try {
      const result = await HistoriqueModifications.deleteHistoriqueModification(
        id
      );
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting historique modification.");
    }
  }

  static async getHistoriqueModificationById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const id = request.params.id;
    try {
      const historiqueModification =
        await HistoriqueModifications.getHistoriqueModificationById(id);
      response.status(200).json(historiqueModification);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting historique modification by ID.");
    }
  }

  static async getHistoriqueModificationByUser(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const userId = request.params.userId;
    try {
      const historiqueModifications =
        await HistoriqueModifications.getHistoriqueModificationByUser(userId);
      response.status(200).json(historiqueModifications);
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send("Error getting historique modifications by user.");
    }
  }
}

export { HistoriqueModificationsController };
