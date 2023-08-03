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

  static insertEmploye(nom, type_id, salaire, date_embauche) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO employes (nom, type_id, salaire, date_embauche) VALUES (?, ?, ?, ?)";
      const values = [nom, type_id, salaire, date_embauche];
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

  static updateEmploye(id, nom, type_id, salaire, date_embauche) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE employes SET nom = ?, type_id = ?, salaire = ?, date_embauche = ? WHERE id = ?";
      const values = [nom, type_id, salaire, date_embauche, id];
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

  static getEmployesById(id) {
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
}

export { Employes };
