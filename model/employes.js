import { connection } from "./connexion.js";

class Employes {
  static selectEmployes() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employes", (error, results, fields) => {
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

  static insertEmploye(nom, salaire, date_embauche, statut, type_employe, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO employes (nom, salaire, date_embauche, statut, type_employe, id_entreprise) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [nom, salaire, date_embauche, statut, type_employe, id_entreprise];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted employe with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateEmploye(id, valuesToUpdate) {
    return new Promise((resolve, reject) => {
      // Building the query dynamically based on the provided fields
      let query = "UPDATE employes SET ";
      const values = [];

      for (const [key, value] of Object.entries(valuesToUpdate)) {
        query += `${key} = ?, `;
        values.push(value);
      }

      // Removing the trailing comma and space
      query = query.slice(0, -2);

      // Adding the condition for the specific ID
      query += " WHERE id = ?";
      values.push(id);

      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated employe with ID:", id);
          resolve(results);
        }
      });
    });
  }


  static deleteEmploye(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM employes WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted employe with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getEmployeById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employes WHERE id=?", [id], (error, results, fields) => {
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
  static getEmployesByType(typeId) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT e.*, te.nom AS type_employe_nom 
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

export { Employes };
