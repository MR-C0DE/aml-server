import { connection } from "./connexion.js";

class JournalisationsOperations {
  static selectJournalisationsOperations() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM journalisations_operations", (error, results, fields) => {
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

  static insertJournalisationOperation(date_operation, id_utilisateur, type_operation, description) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO journalisations_operations (date_operation, id_utilisateur, type_operation, description) VALUES (?, ?, ?, ?)";
      const values = [date_operation, id_utilisateur, type_operation, description];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted journalisation_operation with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateJournalisationOperation(id, date_operation, id_utilisateur, type_operation, description) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE journalisations_operations SET date_operation = ?, id_utilisateur = ?, type_operation = ?, description = ? WHERE id = ?";
      const values = [date_operation, id_utilisateur, type_operation, description, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated journalisation_operation with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteJournalisationOperation(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM journalisations_operations WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted journalisation_operation with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getJournalisationOperationById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM journalisations_operations WHERE id=?", [id], (error, results, fields) => {
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
}

export { JournalisationsOperations };

