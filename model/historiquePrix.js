import { connection } from "./connexion.js";

class HistoriquePrix {
  static selectHistoriquePrix() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM historique_prix", (error, results, fields) => {
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

  static insertHistoriquePrix(id_produit, prix_unitaire) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO historique_prix (id_produit, prix_unitaire, date_mise_a_jour) VALUES (?, ?, NOW())";
      const values = [id_produit, prix_unitaire];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted historique_prix with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateHistoriquePrix(id, prix_unitaire) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE historique_prix SET prix_unitaire = ?, date_mise_a_jour = NOW() WHERE id = ?";
      const values = [prix_unitaire, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated historique_prix with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteHistoriquePrix(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM historique_prix WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted historique_prix with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getHistoriquePrixById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM historique_prix WHERE id=?", [id], (error, results, fields) => {
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
  static getProductPriceHistory(productId) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM historique_prix WHERE id_produit=?", [productId], (error, results, fields) => {
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

export { HistoriquePrix };
