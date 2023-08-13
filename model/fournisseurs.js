import { connection } from "./connexion.js";

class Fournisseurs {
  static selectFournisseurs() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM fournisseurs", (error, results, fields) => {
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

  static insertFournisseur(nom, adresse, telephone, email, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO fournisseurs (nom, adresse, telephone, email, id_entreprise) VALUES (?, ?, ?, ?, ?)";
      const values = [nom, adresse, telephone, email, id_entreprise];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted fournisseur with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateFournisseur(id, nom, adresse, telephone, email, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE fournisseurs SET nom = ?, adresse = ?, telephone = ?, email = ?, id_entreprise = ? WHERE id = ?";
      const values = [nom, adresse, telephone, email, id_entreprise, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated fournisseur with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteFournisseur(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM fournisseurs WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted fournisseur with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getFournisseurById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM fournisseurs WHERE id=?", [id], (error, results, fields) => {
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
  static getFournisseursByEntreprise(id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM fournisseurs WHERE id_entreprise = ?";
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

export { Fournisseurs };
