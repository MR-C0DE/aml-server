import { Employes } from "../model/employes.js";

class EmployesController {

  //AUTORISTION VALIDATIONS
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
    const { nom, salaire, date_embauche, statut, type_employe, id_entreprise } = request.body;

    // 1. Valider la présence des champs obligatoires
    if (!nom || !salaire || !date_embauche || !statut || !type_employe || !id_entreprise) {
      return response.status(400).send("All fields are required.");
    }

    // 2. Valider le format des données
    if (typeof nom !== 'string' || typeof salaire !== 'number' || !(new Date(date_embauche) instanceof Date) || typeof statut !== 'string' || typeof type_employe !== 'number' || typeof id_entreprise !== 'number') {
      return response.status(400).send("Invalid data format.");
    }

    // 3. Valider les valeurs des données
    if (salaire < 0) {
      return response.status(400).send("Salary must be a positive number.");
    }


    try {
      const result = await Employes.insertEmploye(nom, salaire, date_embauche, statut, type_employe, id_entreprise);
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating employe.");
    }
  }

  static async updateEmploye(request, response) {
    const { id } = request.params;
    const { nom, salaire, date_embauche, statut, type_employe, id_entreprise } = request.body;

    // Validate ID
    if (!id) {
      return response.status(400).send("ID is required.");
    }

    // Prepare values to update
    const valuesToUpdate = {};
    if (nom) valuesToUpdate.nom = nom;
    if (salaire) valuesToUpdate.salaire = salaire;
    if (date_embauche) valuesToUpdate.date_embauche = date_embauche;
    if (statut) valuesToUpdate.statut = statut;
    if (type_employe) valuesToUpdate.type_employe = type_employe;
    if (id_entreprise) valuesToUpdate.id_entreprise = id_entreprise;

    // Validate data format
    // ... (you can implement specific validation here)

    // Ensure at least one field to update
    if (Object.keys(valuesToUpdate).length === 0) {
      return response.status(400).send("At least one field is required for update.");
    }

    try {
      const result = await Employes.updateEmploye(id, valuesToUpdate);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating employe.");
    }
  }

  // Reste a ajouter la verification d'autorisation pour supprime un employe. (Seul un manager ou un directeur doit pouvoir acceder a cette fonction)
  static async deleteEmploye(request, response) {
    const { id } = request.params;

    // Validate required fields
    if (!id) {
      return response.status(400).send("ID is required.");
    }

    if (typeof id !== 'number') {
      return response.stutus(400).send('Format de id invalide')
    }

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

    // Validate required fields
    if (!id) {
      return response.status(400).send("ID is required.");
    }

    if (typeof id !== 'number') {
      return response.stutus(400).send('Format id invalide')
    }

    try {
      const result = await Employes.getEmployeById(id);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting employe by ID.");
    }
  }

  static async getEmployesByType(request, response) {
    const { typeId } = request.params;

    // Validate required fields
    if (!typeId) {
      return response.status(400).send("Type ID is required.");
    }

    if (typeof typeId !== 'number') {
      return response.status(400).send('Type Typeid INVALIDE')
    }

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
