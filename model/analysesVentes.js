import { connection } from "./connexion.js";

class AnalysesVentes {
  static selectAnalysesVentes() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM analyses_ventes", (error, results, fields) => {
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

  static insertAnalysesVente(venteData) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO analyses_ventes (id_produit, mois_annee, ventes_totales, stock_initial, stock_final) VALUES (?, ?, ?, ?, ?)";
      const values = [venteData.id_produit, venteData.mois_annee, venteData.ventes_totales, venteData.stock_initial, venteData.stock_final];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted analyses_ventes with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateAnalysesVente(id, venteData) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE analyses_ventes SET id_produit = ?, mois_annee = ?, ventes_totales = ?, stock_initial = ?, stock_final = ? WHERE id = ?";
      const values = [venteData.id_produit, venteData.mois_annee, venteData.ventes_totales, venteData.stock_initial, venteData.stock_final, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated analyses_ventes with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteAnalysesVente(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM analyses_ventes WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted analyses_ventes with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getAnalysesVenteById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM analyses_ventes WHERE id=?", [id], (error, results, fields) => {
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
  static getVentesByMonth(monthYear) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM analyses_ventes WHERE mois_annee = ?", [monthYear], (error, results, fields) => {
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

export { AnalysesVentes };
