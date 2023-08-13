import { connection } from "./connexion.js";

class Achats {
  static selectAchats() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM achats", (error, results, fields) => {
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

  static insertAchat(date_achat, id_fournisseur, montant_total) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO achats (date_achat, id_fournisseur, montant_total) VALUES (?, ?, ?)";
      const values = [date_achat, id_fournisseur, montant_total];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted achat with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateAchat(id, date_achat, id_fournisseur, montant_total) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE achats SET date_achat = ?, id_fournisseur = ?, montant_total = ? WHERE id = ?";
      const values = [date_achat, id_fournisseur, montant_total, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated achat with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteAchat(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM achats WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted achat with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getAchatById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM achats WHERE id=?", [id], (error, results, fields) => {
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
  static getAchatsByFournisseur(fournisseurId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM achats WHERE id_fournisseur = ?";
      connection.query(query, [fournisseurId], (error, results, fields) => {
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

export { Achats };
