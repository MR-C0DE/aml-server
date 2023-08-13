import { connection } from "./connexion.js";

class Factures {
  static selectFactures() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM factures", (error, results, fields) => {
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

  static insertFacture(numero, date_emission, montant_total, id_client, id_vente) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO factures (numero, date_emission, montant_total, id_client, id_vente) VALUES (?, ?, ?, ?, ?)";
      const values = [numero, date_emission, montant_total, id_client, id_vente];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted facture with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateFacture(id, numero, date_emission, montant_total, id_client, id_vente) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE factures SET numero = ?, date_emission = ?, montant_total = ?, id_client = ?, id_vente = ? WHERE id = ?";
      const values = [numero, date_emission, montant_total, id_client, id_vente, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated facture with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteFacture(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM factures WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted facture with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getFactureById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM factures WHERE id=?", [id], (error, results, fields) => {
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
  static getFacturesForClient(clientId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM factures WHERE id_client = ?";
      connection.query(query, [clientId], (error, results, fields) => {
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

export { Factures };
