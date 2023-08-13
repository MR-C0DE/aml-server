import { connection } from "./connexion.js";

class Transactions {
  static selectTransactions() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM transactions", (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Query results:", results);
          resolve(results);
        }
      });
    });
  }

  static insertTransaction(type, date_transaction, montant, description, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO transactions (type, date_transaction, montant, description, id_entreprise) VALUES (?, ?, ?, ?, ?)";
      const values = [type, date_transaction, montant, description, id_entreprise];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted transaction with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateTransaction(id, type, date_transaction, montant, description, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE transactions SET type = ?, date_transaction = ?, montant = ?, description = ?, id_entreprise = ? WHERE id = ?";
      const values = [type, date_transaction, montant, description, id_entreprise, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated transaction with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteTransaction(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM transactions WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted transaction with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getTransactionById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM transactions WHERE id=?", [id], (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Query results:", results);
          resolve(results[0]);
        }
      });
    });
  }

  // Additional methods
  static getTransactionsByEnterpriseId(id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM transactions WHERE id_entreprise = ?";
      connection.query(query, [id_entreprise], (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Query results:", results);
          resolve(results);
        }
      });
    });
  }
}

export { Transactions };
