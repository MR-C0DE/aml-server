import { connection } from "./connexion.js";

class TypeSuccursales {
  static selectTypeSuccursales() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM type_succursales", (error, results, fields) => {
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

  static insertTypeSuccursale(entite) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO type_succursales (entite) VALUES (?)";
      const values = [entite];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted type_succursale with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateTypeSuccursale(id, entite) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE type_succursales SET entite = ? WHERE id = ?";
      const values = [entite, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated type_succursale with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteTypeSuccursale(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM type_succursales WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted type_succursale with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getTypeSuccursaleById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM type_succursales WHERE id=?", [id], (error, results, fields) => {
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
  static getSuccursalesWithType(typeId) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT s.*, ts.entite 
        FROM succursales s 
        INNER JOIN type_succursales ts ON s.id_type_succursale = ts.id 
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

export { TypeSuccursales };
