import { Factures } from "../model/factures.js";
import Validation from "../validation/validation.js";

class FacturesController {
  static async getFactures(request, response) {
    try {
      const factures = await Factures.selectFactures();
      response.status(200).json(factures);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting factures.");
    }
  }

  static async createFacture(request, response) {
    const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const { numero, date_emission, montant_total, id_client, id_vente } = request.body;

    try {
      const result = await Factures.insertFacture(numero, date_emission, montant_total, id_client, id_vente);
      response.status(201).json({ message: "Facture created successfully", id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating facture.");
    }
  }

  static async updateFacture(request, response) {
    const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const id = request.params.id;
    const { numero, date_emission, montant_total, id_client, id_vente } = request.body;

    try {
      await Factures.updateFacture(id, numero, date_emission, montant_total, id_client, id_vente);
      response.status(200).json({ message: `Facture with ID ${id} updated successfully` });
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error updating facture with ID ${id}.`);
    }
  }

  static async deleteFacture(request, response) {
    const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const id = request.params.id;

    try {
      await Factures.deleteFacture(id);
      response.status(200).json({ message: `Facture with ID ${id} deleted successfully` });
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error deleting facture with ID ${id}.`);
    }
  }

  static async getFactureById(request, response) {
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const id = request.params.id;

    try {
      const facture = await Factures.getFactureById(id);
      response.status(200).json(facture);
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error getting facture with ID ${id}.`);
    }
  }

  static async getFacturesForClient(request, response) {
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const clientId = request.params.clientId;

    try {
      const factures = await Factures.getFacturesForClient(clientId);
      response.status(200).json(factures);
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error getting factures for client with ID ${clientId}.`);
    }
  }
}

export { FacturesController };
