import { connection } from "./connexion.js";

class TransfertsProduits {
  static selectTransfertsProduits() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM transferts_produits", (error, results, fields) => {
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

  static insertTransfertProduit(transfertData) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO transferts_produits (id_produit, id_succursale_source, id_succursale_destination, quantite, date_transfert) VALUES (?, ?, ?, ?, ?)";
      const values = [transfertData.id_produit, transfertData.id_succursale_source, transfertData.id_succursale_destination, transfertData.quantite, transfertData.date_transfert];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted transfert_produit with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateTransfertProduit(id, transfertData) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE transferts_produits SET id_produit = ?, id_succursale_source = ?, id_succursale_destination = ?, quantite = ?, date_transfert = ? WHERE id = ?";
      const values = [transfertData.id_produit, transfertData.id_succursale_source, transfertData.id_succursale_destination, transfertData.quantite, transfertData.date_transfert, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated transfert_produit with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteTransfertProduit(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM transferts_produits WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted transfert_produit with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getTransfertProduitById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM transferts_produits WHERE id=?", [id], (error, results, fields) => {
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
  static getTransfertsByProductId(productId) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM transferts_produits WHERE id_produit=?", [productId], (error, results, fields) => {
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

export { TransfertsProduits };
