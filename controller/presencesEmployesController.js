import { PresencesEmployes } from "../model/presencesEmployes.js"; // Import the appropriate model
import Validation from "../validation/validation.js";

class PresencesEmployesController {
  static async getPresencesEmployes(request, response) {
    try {
      const presencesEmployes =
        await PresencesEmployes.selectPresencesEmployes();
      response.status(200).json(presencesEmployes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting presences employes.");
    }
  }

  static async createPresenceEmploye(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id_succursale, id_employe, heure_arrivee, heure_depart } =
      request.body;
    try {
      const result = await PresencesEmployes.insertPresenceEmploye(
        id_succursale,
        id_employe,
        heure_arrivee,
        heure_depart
      );
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating presence employe.");
    }
  }

  static async updatePresenceEmploye(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { id_succursale, id_employe, heure_arrivee, heure_depart } =
      request.body;
    try {
      const result = await PresencesEmployes.updatePresenceEmploye(
        id,
        id_succursale,
        id_employe,
        heure_arrivee,
        heure_depart
      );
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating presence employe.");
    }
  }

  static async deletePresenceEmploye(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const result = await PresencesEmployes.deletePresenceEmploye(id);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting presence employe.");
    }
  }

  static async getPresenceEmployeById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const presenceEmploye = await PresencesEmployes.getPresenceEmployeById(
        id
      );
      response.status(200).json(presenceEmploye);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting presence employe by ID.");
    }
  }

  static async getPresencesForEmployee(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { employeeId } = request.params;
    try {
      const presences = await PresencesEmployes.getPresencesForEmployee(
        employeeId
      );
      response.status(200).json(presences);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting presences for employee.");
    }
  }

  static async getPresencesForSuccursale(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { succursaleId } = request.params;
    try {
      const presences = await PresencesEmployes.getPresencesForSuccursale(
        succursaleId
      );
      response.status(200).json(presences);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting presences for succursale.");
    }
  }
}

export { PresencesEmployesController };
