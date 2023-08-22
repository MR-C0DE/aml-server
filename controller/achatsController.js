import { Achats } from "../model/achats.js";
import { validationResult } from "express-validator";
import Validation from "../validation/validation.js";

class AchatsController {
  static async getAchats(request, response) {
    try {
      const achats = await Achats.selectAchats();
      response.status(200).json(achats);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting achats.");
    }
  }

  static async createAchat(request, response) {
    const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }

    const { date_achat, id_fournisseur, montant_total } = request.body;

    try {
      const result = await Achats.insertAchat(
        date_achat,
        id_fournisseur,
        montant_total
      );
      response
        .status(201)
        .json({ message: "Achat created successfully.", id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating achat.");
    }
  }

  static async updateAchat(request, response) {
    
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }

    const { id } = request.params;
    const { date_achat, id_fournisseur, montant_total } = request.body;

    try {
      const result = await Achats.updateAchat(
        id,
        date_achat,
        id_fournisseur,
        montant_total
      );
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Achat with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Achat updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating achat.");
    }
  }

  static async deleteAchat(request, response) {
    
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }

    const { id } = request.params;

    try {
      const result = await Achats.deleteAchat(id);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Achat with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Achat deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting achat.");
    }
  }

  static async getAchatById(request, response) {
    
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }

    const { id } = request.params;

    try {
      const achat = await Achats.getAchatById(id);
      if (!achat) {
        response
          .status(404)
          .json({ message: `Achat with ID ${id} not found.` });
      } else {
        response.status(200).json(achat);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting achat.");
    }
  }

  static async getAchatsByFournisseur(request, response) {
    
        const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }

    const { fournisseurId } = request.params;

    try {
      const achats = await Achats.getAchatsByFournisseur(fournisseurId);
      response.status(200).json(achats);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting achats by fournisseur.");
    }
  }
}

export { AchatsController };
