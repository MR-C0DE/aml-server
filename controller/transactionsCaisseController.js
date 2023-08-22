import { TransactionsCaisse } from "../model/transactionsCaisse.js";
import Validation from "../validation/validation.js";

class TransactionsCaisseController {
  static async getTransactionsCaisse(request, response) {
    try {
      const transactions = await TransactionsCaisse.selectTransactionsCaisse();
      response.status(200).json(transactions);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting transactions.");
    }
  }

  static async createTransactionCaisse(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const data = request.body; // Assuming data is sent in the request body
      const result = await TransactionsCaisse.insertTransactionCaisse(data);
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating transaction.");
    }
  }

  static async updateTransactionCaisse(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const id = request.params.id; // Assuming the ID is in the URL parameter
      const data = request.body; // Assuming updated data is sent in the request body
      await TransactionsCaisse.updateTransactionCaisse(id, data);
      response.status(200).send("Transaction updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating transaction.");
    }
  }

  static async deleteTransactionCaisse(request, response) {

    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const id = request.params.id; // Assuming the ID is in the URL parameter
      await TransactionsCaisse.deleteTransactionCaisse(id);
      response.status(200).send("Transaction deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting transaction.");
    }
  }

  static async getTransactionCaisseById(request, response) {
    const errorValide = Validation.valide(request, response);
    if (errorValide) {
      return;
    }
    try {
      const id = request.params.id; // Assuming the ID is in the URL parameter
      const transaction = await TransactionsCaisse.getTransactionCaisseById(id);
      response.status(200).json(transaction);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting transaction.");
    }
  }

  static async getTransactionsByEmployee(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    try {
      const employeeId = request.params.employeeId; // Assuming the employee ID is in the URL parameter
      const transactions = await TransactionsCaisse.getTransactionsByEmployee(
        employeeId
      );
      response.status(200).json(transactions);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting transactions by employee.");
    }
  }
}

export { TransactionsCaisseController };
