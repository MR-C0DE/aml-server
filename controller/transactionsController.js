import { Transactions } from "../model/transactions.js";
import Validation from "../validation/validation.js";

class TransactionsController {
  static async getTransactions(request, response) {
    try {
      const transactions = await Transactions.selectTransactions();
      response.status(200).json(transactions);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting transactions.");
    }
  }

  static async createTransaction(request, response) {
        const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { type, date_transaction, montant, description, id_entreprise } = request.body;

    try {
      const result = await Transactions.insertTransaction(type, date_transaction, montant, description, id_entreprise);
      response.status(201).json({ message: "Transaction created successfully.", insertId: result.insertId });
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating transaction.");
    }
  }

  static async updateTransaction(request, response) {
        const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;
    const { type, date_transaction, montant, description, id_entreprise } = request.body;

    try {
      await Transactions.updateTransaction(id, type, date_transaction, montant, description, id_entreprise);
      response.status(200).json({ message: `Transaction with ID ${id} updated successfully.` });
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error updating transaction with ID ${id}.`);
    }
  }

  static async deleteTransaction(request, response) {
        const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      await Transactions.deleteTransaction(id);
      response.status(200).json({ message: `Transaction with ID ${id} deleted successfully.` });
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error deleting transaction with ID ${id}.`);
    }
  }

  static async getTransactionById(request, response) {
        const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const transaction = await Transactions.getTransactionById(id);
      if (transaction) {
        response.status(200).json(transaction);
      } else {
        response.status(404).send(`Transaction with ID ${id} not found.`);
      }
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error getting transaction with ID ${id}.`);
    }
  }

  static async getTransactionsByEnterpriseId(request, response) {
        const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id_entreprise } = request.params;

    try {
      const transactions = await Transactions.getTransactionsByEnterpriseId(id_entreprise);
      response.status(200).json(transactions);
    } catch (error) {
      console.error(error);
      response.status(500).send(`Error getting transactions for enterprise with ID ${id_entreprise}.`);
    }
  }
}

export { TransactionsController };
