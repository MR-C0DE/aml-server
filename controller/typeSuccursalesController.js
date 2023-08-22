import { TypeSuccursales } from "../model/typeSuccursales.js";
import Validation from "../validation/validation.js";

class TypeSuccursalesController {
  static async getTypeSuccursales(request, response) {
    try {
      const types = await TypeSuccursales.selectTypeSuccursales();
      response.status(200).json(types);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting types of succursales.");
    }
  }

  static async createTypeSuccursale(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { entite } = request.body;
      if (!entite) {
        response.status(400).send("Entity name is required.");
        return;
      }
      const result = await TypeSuccursales.insertTypeSuccursale(entite);
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating type of succursale.");
    }
  }

  static async updateTypeSuccursale(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { id } = request.params;
      const { entite } = request.body;
      if (!id || !entite) {
        response.status(400).send("Both ID and entity name are required.");
        return;
      }
      const result = await TypeSuccursales.updateTypeSuccursale(id, entite);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating type of succursale.");
    }
  }

  static async deleteTypeSuccursale(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const { id } = request.params;
      if (!id) {
        response.status(400).send("ID is required.");
        return;
      }
      const result = await TypeSuccursales.deleteTypeSuccursale(id);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting type of succursale.");
    }
  }
}

export { TypeSuccursalesController };
