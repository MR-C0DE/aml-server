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
    const { matricule, nom, salaire, date_embauche, statut, type_employe, id_entreprise } = request.body;
    try {
      const result = await Employes.insertEmploye(matricule, nom, salaire, date_embauche, "En attente", type_employe, id_entreprise);
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating employe.");
    }
  }

  static async updateEmploye(request, response) {
    const { id } = request.params;
    const { matricule, nom, salaire, date_embauche, statut, type_employe, id_entreprise } = request.body;
    try {
      const result = await Employes.updateEmploye(id, matricule, nom, salaire, date_embauche, statut, type_employe, id_entreprise);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating employe.");
    }
  }

  static async deleteEmploye(request, response) {
    const { id } = request.params;
    try {
      const result = await Employes.deleteEmploye(id);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting employe.");
    }
  }

  static async getEmployeById(request, response) {
    const { id } = request.params;
    try {
      const employe = await Employes.getEmployeById(id);
      response.status(200).json(employe);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employe by ID.");
    }
  }

  static async getEmployesByType(request, response) {
    const { typeId } = request.params;
    try {
      const employes = await Employes.getEmployesByType(typeId);
      response.status(200).json(employes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employes by type.");
    }
  }
}

export { EmployesController };
