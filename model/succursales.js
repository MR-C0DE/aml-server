import { connection } from "./connexion.js";

class Succursales {
  static selectSuccursales() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM succursales", (error, results, fields) => {
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

  static insertSuccursale(succursaleData) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO succursales (nom, adresse, ville, code_emplacement, pays, telephone, email, id_entreprise, type_succursale) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        succursaleData.nom,
        succursaleData.adresse,
        succursaleData.ville,
        succursaleData.code_emplacement,
        succursaleData.pays,
        succursaleData.telephone,
        succursaleData.email,
        succursaleData.id_entreprise,
        succursaleData.type_succursale
      ];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted succursale with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateSuccursale(id, succursaleData) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE succursales SET nom = ?, adresse = ?, ville = ?, code_emplacement = ?, pays = ?, telephone = ?, email = ?, id_entreprise = ?, type_succursale = ? WHERE id = ?";
      const values = [
        succursaleData.nom,
        succursaleData.adresse,
        succursaleData.ville,
        succursaleData.code_emplacement,
        succursaleData.pays,
        succursaleData.telephone,
        succursaleData.email,
        succursaleData.id_entreprise,
        succursaleData.type_succursale,
        id
      ];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated succursale with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteSuccursale(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM succursales WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted succursale with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getSuccursaleById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM succursales WHERE id=?", [id], (error, results, fields) => {
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
  static getSuccursalesByType(typeId) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT s.*, ts.entite 
        FROM succursales s 
        INNER JOIN type_succursales ts ON s.type_succursale = ts.id 
        WHERE ts.id = ?
      `;
      connection.query(query, [typeId], (error, results, fields) => {
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

export { Succursales };
