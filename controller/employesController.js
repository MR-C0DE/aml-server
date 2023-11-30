import { Employes } from "../model/employes.js";
import Validation from "../validation/validation.js";

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
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const {
      matricule,
      nom,
      prenom,
      date_naissance,
      adresse,
      telephone,
      email,
      salaire,
      date_embauche,
      type_employe,
      id_entreprise,
    } = request.body;
    const STATUT = "En attente";
    try {
      const result = await Employes.insertEmploye(
        matricule,
        nom,
        prenom,
        date_naissance,
        adresse,
        telephone,
        email,
        salaire,
        date_embauche,
        STATUT,
        type_employe,
        id_entreprise
      );
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating employe.");
    }
  }

  static async updateEmploye(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const {
      matricule,
      nom,
      prenom,
      date_naissance,
      adresse,
      telephone,
      email,
      salaire,
      date_embauche,
      statut,
      type_employe,
      id_entreprise,
    } = request.body;
    try {
      const result = await Employes.updateEmploye(
        id,
        matricule,
        nom,
        prenom,
        date_naissance,
        adresse,
        telephone,
        email,
        salaire,
        date_embauche,
        statut,
        type_employe,
        id_entreprise
      );
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating employe.");
    }
  }

  static async deleteEmploye(request, response) {
    Validation.valide(request, response);
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
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const employe = await Employes.getEmployeById(id);
      response.status(200).json(employe);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employe by ID.");
    }
  }
  static async getEmployeByIdEntreprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const employe = await Employes.getEmployeByIdEntreprise(id);
      response.status(200).json(employe);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employe by entreprise ID.");
    }
  }
  static async getEmployesByType(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
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
