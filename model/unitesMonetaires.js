import { connection } from "./connexion.js";

class UnitesMonetaires {
  static selectUnitesMonetaires() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM unites_monetaires", (error, results, fields) => {
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

  static insertUniteMonetaire(code, nom, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO unites_monetaires (code, nom, id_entreprise) VALUES (?, ?, ?)";
      const values = [code, nom, id_entreprise];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted unite_monetaire with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateUniteMonetaire(id, code, nom, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE unites_monetaires SET code = ?, nom = ?, id_entreprise = ? WHERE id = ?";
      const values = [code, nom, id_entreprise, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated unite_monetaire with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteUniteMonetaire(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM unites_monetaires WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted unite_monetaire with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getUniteMonetaireById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM unites_monetaires WHERE id=?", [id], (error, results, fields) => {
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
  static getUnitesMonetairesForEnterprise(enterpriseId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM unites_monetaires WHERE id_entreprise = ?";
      connection.query(query, [enterpriseId], (error, results, fields) => {
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

export { UnitesMonetaires };
