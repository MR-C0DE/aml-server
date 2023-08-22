import { CommandesFournisseurs } from "../model/commandesFournisseurs.js";
import Validation from "../validation/validation.js";

class CommandesFournisseursController {
  static async getCommandesFournisseurs(request, response) {
    try {
      const commandesFournisseurs =
        await CommandesFournisseurs.selectCommandesFournisseurs();
      response.status(200).json(commandesFournisseurs);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting commandes fournisseurs.");
    }
  }

  static async createCommandeFournisseur(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id_achat, id_produit, quantite, prix_achats } = request.body;

    try {
      const result = await CommandesFournisseurs.insertCommandeFournisseur(
        id_achat,
        id_produit,
        quantite,
        prix_achats
      );
      response
        .status(201)
        .json({
          message: "Commande fournisseur created successfully.",
          id: result.insertId,
        });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating commande fournisseur.");
    }
  }

  static async updateCommandeFournisseur(request, response) {
    Validation.valide(request, response);
    const { id } = request.params;
    const { id_achat, id_produit, quantite, prix_achats } = request.body;

    try {
      const result = await CommandesFournisseurs.updateCommandeFournisseur(
        id,
        id_achat,
        id_produit,
        quantite,
        prix_achats
      );
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Commande fournisseur with ID ${id} not found.` });
      } else {
        response
          .status(200)
          .json({ message: "Commande fournisseur updated successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating commande fournisseur.");
    }
  }

  static async deleteCommandeFournisseur(request, response) {
    Validation.valide(request, response);
    const { id } = request.params;

    try {
      const result = await CommandesFournisseurs.deleteCommandeFournisseur(id);
      if (result.affectedRows === 0) {
        response
          .status(404)
          .json({ message: `Commande fournisseur with ID ${id} not found.` });
      } else {
        response
          .status(200)
          .json({ message: "Commande fournisseur deleted successfully." });
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting commande fournisseur.");
    }
  }

  static async getCommandeFournisseurById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const commandeFournisseur =
        await CommandesFournisseurs.getCommandeFournisseurById(id);
      if (!commandeFournisseur) {
        response
          .status(404)
          .json({ message: `Commande fournisseur with ID ${id} not found.` });
      } else {
        response.status(200).json(commandeFournisseur);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting commande fournisseur.");
    }
  }

  static async getCommandesForAchat(request, response) {
    const errorValide = Validation.valide(request, response);

    if(errorValide){
      return;
    }

    if (errorValide) {
      return;
    }
    const { achatId } = request.params;

    try {
      const commandes = await CommandesFournisseurs.getCommandesForAchat(
        achatId
      );
      response.status(200).json(commandes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting commandes for achat.");
    }
  }
}

export { CommandesFournisseursController };
