import { connection } from "./connexion.js";

class Utilisateurs {
  static selectUtilisateurs() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM utilisateurs", (error, results, fields) => {
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

  static insertUtilisateur(matricule, password, statut, id_employe) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO utilisateurs (matricule, password, statut, id_employe) VALUES (?, ?, ?, ?)";
      const values = [matricule, password, statut, id_employe];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted utilisateur with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateUtilisateur(id, matricule, password, statut, id_employe) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE utilisateurs SET matricule = ?, password = ?, statut = ?, id_employe = ? WHERE id = ?";
      const values = [matricule, password, statut, id_employe, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated utilisateur with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteUtilisateur(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM utilisateurs WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted utilisateur with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getUtilisateurById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM utilisateurs WHERE id=?", [id], (error, results, fields) => {
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

  // You can add more methods here based on your requirements
  
}

export { Utilisateurs };