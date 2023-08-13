import { connection } from "./connexion.js";

class TypeEmployes {
  static selectTypeEmployes() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM type_employes", (error, results, fields) => {
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

  static insertTypeEmploye(nom, description) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO type_employes (nom, description) VALUES (?, ?)";
      const values = [nom, description];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted type_employe with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateTypeEmploye(id, nom, description) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE type_employes SET nom = ?, description = ? WHERE id = ?";
      const values = [nom, description, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated type_employe with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteTypeEmploye(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM type_employes WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted type_employe with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getTypeEmployeById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM type_employes WHERE id=?", [id], (error, results, fields) => {
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
  static getEmployesWithType(typeId) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT e.*, te.nom AS type_nom 
        FROM employes e 
        INNER JOIN type_employes te ON e.type_employe = te.id 
        WHERE te.id = ?
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

export { TypeEmployes };
