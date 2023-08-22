import { Ventes } from "../model/ventes.js";
import Validation from "../validation/validation.js";

class VentesController {
  static async getVentes(request, response) {
    try {
      const ventes = await Ventes.selectVentes();
      response.status(200).json(ventes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting ventes.");
    }
  }

  static async createVente(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { date_vente, montant_total, id_succursale, id_employe } =
      request.body;
    try {
      const result = await Ventes.insertVente(
        date_vente,
        montant_total,
        id_succursale,
        id_employe
      );
      response.status(201).json({
        message: "Vente created successfully",
        venteId: result.insertId,
      });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating vente.");
    }
  }

  static async updateVente(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const venteId = request.params.id;
    const { date_vente, montant_total, id_succursale, id_employe } =
      request.body;
    try {
      await Ventes.updateVente(
        venteId,
        date_vente,
        montant_total,
        id_succursale,
        id_employe
      );
      response
        .status(200)
        .json({ message: `Vente with ID ${venteId} updated successfully` });
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error updating vente with ID ${venteId}.`);
    }
  }

  static async deleteVente(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const venteId = request.params.id;
    try {
      await Ventes.deleteVente(venteId);
      response
        .status(200)
        .json({ message: `Vente with ID ${venteId} deleted successfully` });
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error deleting vente with ID ${venteId}.`);
    }
  }

  static async getVenteById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const venteId = request.params.id;
    try {
      const vente = await Ventes.getVenteById(venteId);
      if (vente) {
        response.status(200).json(vente);
      } else {
        response
          .status(404)
          .json({ message: `Vente with ID ${venteId} not found` });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error fetching vente with ID ${venteId}.`);
    }
  }

  static async getVentesBySuccursale(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const succursaleId = request.params.succursaleId;
    try {
      const ventes = await Ventes.getVentesBySuccursale(succursaleId);
      response.status(200).json(ventes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting ventes by succursale.");
    }
  }

  static async getVentesByEmploye(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const employeId = request.params.employeId;
    try {
      const ventes = await Ventes.getVentesByEmploye(employeId);
      response.status(200).json(ventes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting ventes by employe.");
    }
  }
}

export { VentesController };
