import { AnalysesVentes } from "../model/analysesVentes.js";
import Validation from "../validation/validation.js";

class AnalysesVentesController {
  static async getAnalysesVentes(request, response) {

    try {
      const analysesVentes = await AnalysesVentes.selectAnalysesVentes();
      response.status(200).json(analysesVentes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting analyses ventes.");
    }
  }

  static async createAnalysesVente(request, response) {
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    
    const venteData = request.body;

    try {
      const result = await AnalysesVentes.insertAnalysesVente(venteData);
      response.status(201).json({ message: "Analyses vente created successfully.", id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating analyses vente.");
    }
  }

  static async updateAnalysesVente(request, response) {
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const { id } = request.params;
    const venteData = request.body;

    try {
      const result = await AnalysesVentes.updateAnalysesVente(id, venteData);
      if (result.affectedRows === 0) {
        response.status(404).json({ message: `Analyses vente with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Analyses vente updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating analyses vente.");
    }
  }

  static async deleteAnalysesVente(request, response) {
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const { id } = request.params;

    try {
      const result = await AnalysesVentes.deleteAnalysesVente(id);
      if (result.affectedRows === 0) {
        response.status(404).json({ message: `Analyses vente with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Analyses vente deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting analyses vente.");
    }
  }

  static async getAnalysesVenteById(request, response) {
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const { id } = request.params;

    try {
      const analysesVente = await AnalysesVentes.getAnalysesVenteById(id);
      if (!analysesVente) {
        response.status(404).json({ message: `Analyses vente with ID ${id} not found.` });
      } else {
        response.status(200).json(analysesVente);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting analyses vente.");
    }
  }

  // Additional methods
  static async getVentesByMonth(request, response) {
    const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const { monthYear } = request.params;

    try {
      const ventes = await AnalysesVentes.getVentesByMonth(monthYear);
      response.status(200).json(ventes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting ventes by month.");
    }
  }
}

export { AnalysesVentesController };
