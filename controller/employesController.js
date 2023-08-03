import { Employes } from "../model/employes.js";

class EmployesController {
  static async getEmployes(request, response) {
    try {
      const employes = await Employes.selectEmployes();
      response.status(200).json(employes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employes.");
    }
  }

  static async createEmploye(request, response) {
    const { nom, type_id, salaire, date_embauche } = request.body;

    try {
      const result = await Employes.insertEmploye(nom, type_id, salaire, date_embauche);
      response.status(201).json({ message: "Employe created successfully.", id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating employe.");
    }
  }

  static async updateEmploye(request, response) {
    const { id } = request.params;
    const { nom, type_id, salaire, date_embauche } = request.body;

    try {
      const result = await Employes.updateEmploye(id, nom, type_id, salaire, date_embauche);
      if (result.affectedRows === 0) {
        response.status(404).json({ message: `Employe with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Employe updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating employe.");
    }
  }

  static async deleteEmploye(request, response) {
    const { id } = request.params;

    try {
      const result = await Employes.deleteEmploye(id);
      if (result.affectedRows === 0) {
        response.status(404).json({ message: `Employe with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Employe deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting employe.");
    }
  }

  static async getEmployeById(request, response) {
    const { id } = request.params;

    try {
      const employe = await Employes.getEmployesById(id);
      if (!employe) {
        response.status(404).json({ message: `Employe with ID ${id} not found.` });
      } else {
        response.status(200).json(employe);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employe.");
    }
  }
}

export { EmployesController };
