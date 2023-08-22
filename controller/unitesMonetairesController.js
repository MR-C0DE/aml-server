import { UnitesMonetaires } from "../model/unitesMonetaires.js"; // Update the path to match your model's location
import Validation from "../validation/validation.js";

class UnitesMonetairesController {
  static async getUnitesMonetaires(request, response) {
    try {
      const unitesMonetaires = await UnitesMonetaires.selectUnitesMonetaires();
      response.status(200).json(unitesMonetaires);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting unites monetaires.");
    }
  }

  static async createUniteMonetaire(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { code, nom, id_entreprise } = request.body;
    try {
      const result = await UnitesMonetaires.insertUniteMonetaire(
        code,
        nom,
        id_entreprise
      );
      response
        .status(201)
        .json({ message: "Unite monetaire created successfully.", result });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating unite monetaire.");
    }
  }

  static async updateUniteMonetaire(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { code, nom, id_entreprise } = request.body;
    try {
      await UnitesMonetaires.updateUniteMonetaire(id, code, nom, id_entreprise);
      response
        .status(200)
        .json({
          message: `Unite monetaire with ID ${id} updated successfully.`,
        });
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send(`Error updating unite monetaire with ID ${id}.`);
    }
  }

  static async deleteUniteMonetaire(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      await UnitesMonetaires.deleteUniteMonetaire(id);
      response
        .status(200)
        .json({
          message: `Unite monetaire with ID ${id} deleted successfully.`,
        });
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send(`Error deleting unite monetaire with ID ${id}.`);
    }
  }

  static async getUniteMonetaireById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    try {
      const uniteMonetaire = await UnitesMonetaires.getUniteMonetaireById(id);
      if (uniteMonetaire) {
        response.status(200).json(uniteMonetaire);
      } else {
        response.status(404).send(`Unite monetaire with ID ${id} not found.`);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error getting unite monetaire with ID ${id}.`);
    }
  }

  static async getUnitesMonetairesForEnterprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { enterpriseId } = request.params;
    try {
      const unitesMonetaires =
        await UnitesMonetaires.getUnitesMonetairesForEnterprise(enterpriseId);
      response.status(200).json(unitesMonetaires);
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send(
          `Error getting unites monetaires for enterprise with ID ${enterpriseId}.`
        );
    }
  }
}

export { UnitesMonetairesController };
