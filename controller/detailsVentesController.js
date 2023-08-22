import { DetailsVentes } from "../model/detailVentes.js";
import Validation from "../validation/validation.js";

class DetailsVentesController {
  static async getDetailsVentes(request, response) {
    try {
      const detailsVentes = await DetailsVentes.selectDetailsVentes();
      response.status(200).json(detailsVentes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting details ventes.");
    }
  }

  static async createDetailsVente(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id_vente, id_produit, quantite, prix_unitaire } = request.body;

    try {
      const result = await DetailsVentes.insertDetailsVente(
        id_vente,
        id_produit,
        quantite,
        prix_unitaire
      );
      response
        .status(201)
        .json({
          message: "Details vente created successfully.",
          id: result.insertId,
        });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating details vente.");
    }
  }

  static async updateDetailsVente(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { id_vente, id_produit, quantite, prix_unitaire } = request.body;

    try {
      const result = await DetailsVentes.updateDetailsVente(
        id,
        id_vente,
        id_produit,
        quantite,
        prix_unitaire
      );
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Details vente with ID ${id} not found.` });
      } else {
        response
          .status(200)
          .json({ message: "Details vente updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating details vente.");
    }
  }

  static async deleteDetailsVente(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const result = await DetailsVentes.deleteDetailsVente(id);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Details vente with ID ${id} not found.` });
      } else {
        response
          .status(200)
          .json({ message: "Details vente deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting details vente.");
    }
  }

  static async getDetailsVenteById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const detailsVente = await DetailsVentes.getDetailsVenteById(id);
      if (!detailsVente) {
        response
          .status(404)
          .json({ message: `Details vente with ID ${id} not found.` });
      } else {
        response.status(200).json(detailsVente);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting details vente.");
    }
  }

  static async getDetailsVenteByVenteId(request, response) {
    const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }
    const { venteId } = request.params;

    try {
      const detailsVentes = await DetailsVentes.getDetailsVenteByVenteId(
        venteId
      );
      response.status(200).json(detailsVentes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting details ventes by vente ID.");
    }
  }

  // Add more controller methods as needed
}

export { DetailsVentesController };
