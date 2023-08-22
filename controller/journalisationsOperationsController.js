import { JournalisationsOperations } from "../model/journalisationsOperations.js";
import Validation from "../validation/validation.js";

class JournalisationsOperationsController {
  static async getJournalisationsOperations(request, response) {
    try {
      const journalisations =
        await JournalisationsOperations.selectJournalisationsOperations();
      response.status(200).json(journalisations);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting journalisations operations.");
    }
  }

  static async createJournalisationOperation(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { date_operation, id_utilisateur, type_operation, description } =
        request.body;
      const result =
        await JournalisationsOperations.insertJournalisationOperation(
          date_operation,
          id_utilisateur,
          type_operation,
          description
        );
      response
        .status(201)
        .json({
          message: "Journalisation operation created successfully",
          id: result.insertId,
        });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating journalisation operation.");
    }
  }

  static async updateJournalisationOperation(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { id } = request.params;
      const { date_operation, id_utilisateur, type_operation, description } =
        request.body;
      await JournalisationsOperations.updateJournalisationOperation(
        id,
        date_operation,
        id_utilisateur,
        type_operation,
        description
      );
      response
        .status(200)
        .json({ message: "Journalisation operation updated successfully" });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating journalisation operation.");
    }
  }

  static async deleteJournalisationOperation(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { id } = request.params;
      await JournalisationsOperations.deleteJournalisationOperation(id);
      response
        .status(200)
        .json({ message: "Journalisation operation deleted successfully" });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting journalisation operation.");
    }
  }

  static async getJournalisationOperationById(request, response) {
    const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    try {
      const { id } = request.params;
      const journalisation =
        await JournalisationsOperations.getJournalisationOperationById(id);
      response.status(200).json(journalisation);
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send("Error getting journalisation operation by ID.");
    }
  }
}

export { JournalisationsOperationsController };
