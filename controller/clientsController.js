import { Clients } from "../model/clients.js";
import Validation from "../validation/validation.js";

class ClientsController {
  static async getClients(request, response) {
    try {
      const clients = await Clients.selectClients();
      response.status(200).json(clients);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting clients.");
    }
  }

  static async createClient(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { nom, prenom, adresse, telephone, email, id_entreprise } =
      request.body;

    try {
      const result = await Clients.insertClient(
        nom,
        prenom,
        adresse,
        telephone,
        email,
        id_entreprise
      );
      response
        .status(201)
        .json({ message: "Client created successfully.", id: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating client.");
    }
  }

  static async updateClient(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { nom, prenom, adresse, telephone, email } = request.body;

    try {
      const result = await Clients.updateClient(
        id,
        nom,
        prenom,
        adresse,
        telephone,
        email
      );
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Client with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Client updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating client.");
    }
  }

  static async deleteClient(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const result = await Clients.deleteClient(id);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Client with ID ${id} not found.` });
      } else {
        response.status(200).json({ message: "Client deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting client.");
    }
  }

  static async getClientById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const client = await Clients.getClientById(id);
      if (!client) {
        response
          .status(404)
          .json({ message: `Client with ID ${id} not found.` });
      } else {
        response.status(200).json(client);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting client.");
    }
  }

  static async getClientsByEnterprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { enterpriseId } = request.params;

    try {
      const clients = await Clients.getClientsByEnterprise(enterpriseId);
      response.status(200).json(clients);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting clients by enterprise.");
    }
  }
}

export { ClientsController };
