import { connection } from "./connexion.js";

class TransactionsCaisse {
  static selectTransactionsCaisse() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM transactions_caisse", (error, results, fields) => {
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

  static insertTransactionCaisse(data) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO transactions_caisse (id_succursale, id_employe, montant, type, description, date_transaction) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [data.id_succursale, data.id_employe, data.montant, data.type, data.description, data.date_transaction];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted transaction_caisse with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateTransactionCaisse(id, data) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE transactions_caisse SET id_succursale = ?, id_employe = ?, montant = ?, type = ?, description = ?, date_transaction = ? WHERE id = ?";
      const values = [data.id_succursale, data.id_employe, data.montant, data.type, data.description, data.date_transaction, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated transaction_caisse with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteTransactionCaisse(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM transactions_caisse WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted transaction_caisse with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getTransactionCaisseById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM transactions_caisse WHERE id=?", [id], (error, results, fields) => {
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
  static getTransactionsByEmployee(employeeId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM transactions_caisse WHERE id_employe = ?";
      connection.query(query, [employeeId], (error, results, fields) => {
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

export { TransactionsCaisse };
