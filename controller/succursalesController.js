import { Succursales } from "../model/succursales.js";
import Validation from "../validation/validation.js";

class SuccursalesController {
  static async getSuccursales(request, response) {
    try {
      const succursales = await Succursales.selectSuccursales();
      response.status(200).json(succursales);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting succursales.");
    }
  }

  static async createSuccursale(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const succursaleData = request.body; // Assuming the request body contains the necessary data
      const result = await Succursales.insertSuccursale(succursaleData);
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating succursale.");
    }
  }

  static async updateSuccursale(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const succursaleId = parseInt(request.params.id); // Assuming the ID is passed in the URL
      const succursaleData = request.body; // Assuming the request body contains the updated data
      const result = await Succursales.updateSuccursale(
        succursaleId,
        succursaleData
      );
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating succursale.");
    }
  }

  static async deleteSuccursale(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const succursaleId = parseInt(request.params.id); // Assuming the ID is passed in the URL
      const result = await Succursales.deleteSuccursale(succursaleId);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting succursale.");
    }
  }

  static async getSuccursaleById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const succursaleId = parseInt(request.params.id); // Assuming the ID is passed in the URL
      const succursale = await Succursales.getSuccursaleById(succursaleId);
      response.status(200).json(succursale);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting succursale by ID.");
    }
  }

  static async getSuccursalesByType(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const typeId = parseInt(request.params.typeId); // Assuming the type ID is passed in the URL
      const succursales = await Succursales.getSuccursalesByType(typeId);
      response.status(200).json(succursales);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting succursales by type.");
    }
  }
}

export { SuccursalesController };
