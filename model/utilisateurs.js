import { connection } from "./connexion.js";
import bcrypt from "bcrypt";

class Utilisateurs {
  static selectUtilisateurs() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM utilisateurs",
        (error, results, fields) => {
          if (error) {
            console.error("Error executing query:", error);
            reject(error);
          } else {
            console.log("Query results:", results);
            resolve(results);
          }
        }
      );
    });
  }

  static insertUtilisateur(password, statut, id_employe, id_role) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO utilisateurs ( password, statut, id_employe, id_role) VALUES (?, ?, ?, ?)";
      const values = [password, statut, id_employe, id_role];
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

  static updateUtilisateur(id, password, statut, id_employe) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE utilisateurs SET password = ?, statut = ?, id_employe = ? WHERE id = ?";
      const values = [password, statut, id_employe, id];
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
      connection.query(
        "SELECT * FROM utilisateurs WHERE id=?",
        [id],
        (error, results, fields) => {
          if (error) {
            console.error("Error executing query:", error);
            reject(error);
          } else {
            console.log("Query results:", results);
            resolve(results[0]);
          }
        }
      );
    });
  }

  // Additional methods

  static getUtilisateurByMatricule(matricule) {
    return new Promise((resolve, reject) => {
      connection.query(
        `
        SELECT u.*, e.*, u.statut AS statut_utilisateur, t.nom AS type_nom, t.description AS type_description
        FROM utilisateurs u
        INNER JOIN employes e ON u.id_employe = e.id
        INNER JOIN type_employes t ON e.type_employe = t.id
        WHERE e.matricule = ?
      `,

        [matricule],
        (error, results, fields) => {
          if (error) {
            console.error("Error executing query:", error);
            reject(error);
          } else {
            console.log("Query results:", results);
            resolve(results[0]);
          }
        }
      );
    });
  }

  // You can add more methods here based on your requirements

  static generatePassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
    
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset[randomIndex];
    }
    
    return password;
  }

  static async cryptPasswordUtilisateur(password){
    return await bcrypt.hash(password, 10);
  }
}

export { Utilisateurs };
