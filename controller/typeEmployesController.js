import { TypeEmployes } from "../model/typeEmployes.js";
import Validation from "../validation/validation.js";

class TypeEmployesController {
  static async getTypeEmployes(request, response) {
    try {
      const typeEmployes = await TypeEmployes.selectTypeEmployes();
      response.status(200).json(typeEmployes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting type employes.");
    }
  }

  static async createTypeEmploye(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { nom, description } = request.body;
    try {
      const result = await TypeEmployes.insertTypeEmploye(nom, description);
      response.status(201).json({ id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating type employe.");
    }
  }

  static async updateTypeEmploye(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { nom, description } = request.body;
    try {
      await TypeEmployes.updateTypeEmploye(id, nom, description);
      response.status(200).send("Type employe updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating type employe.");
    }
  }

  static async deleteTypeEmploye(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await TypeEmployes.deleteTypeEmploye(id);
      response.status(200).send("Type employe deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting type employe.");
    }
  }

  static async getTypeEmployeById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const typeEmploye = await TypeEmployes.getTypeEmployeById(id);
      response.status(200).json(typeEmploye);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting type employe by ID.");
    }
  }

  static async getEmployesWithType(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { typeId } = request.params;
    try {
      const employesWithType = await TypeEmployes.getEmployesWithType(typeId);
      response.status(200).json(employesWithType);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employes with type.");
    }
  }
}

export { TypeEmployesController };
