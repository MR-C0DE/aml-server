import { Succursale } from "../model/succursale.js";

class SuccursaleController {
  static async getSuccursale(request, response) {
    const succursales = await Succursale.selectSuccursale();
    console.log(Succursale.selectSuccursale());
    if (!succursales) {
      response.status(404).send("Succursales not found");
    } else {
      response.status(200).json(succursales);
    }
  }

  static async addSuccursale(request, response) {
    const succursale = request.body;
    const result = await Succursale.addSuccursale(succursale);
    if (result) {
      response.status(201).send("Succursale added successfully");
    } else {
      response.status(500).send("Error adding succursale");
    }
  }

  static async updateSuccursale(request, response) {
    const succursale = request.body;
    succursale.id = request.params.id;
    const result = await Succursale.updateSuccursale(succursale);
    if (result) {
      response.status(200).send("Succursale updated successfully");
    } else {
      response.status(500).send("Error updating succursale");
    }
  }

  static async deleteSuccursale(request, response) {
    const id = request.params.id;
    const result = await Succursale.deleteSuccursale(id);
    if (result) {
      response.status(200).send("Succursale deleted successfully");
    } else {
      response.status(500).send("Error deleting succursale");
    }
  }

  static async getSuccursaleById(request, response) {
    const id = request.params.id;
    const succursale = await Succursale.getSuccursaleById(id);
    if (!succursale) {
      response.status(404).send("Succursale with ID ${id} not found");
    } else {
      response.status(200).json(succursale);
    }
  }

  static async getSuccursaleByCode(request, response) {
    const code = request.params.code;
    const succursale = await Succursale.getSuccursaleByCode(code);
    if (!succursale) {
      response.status(404).send("Succursale with code ${code} not found");
    } else {
      response.status(200).json(succursale);
    }
  }
}

export { SuccursaleController };
