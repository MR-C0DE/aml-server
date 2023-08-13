import { connection } from "./connexion.js";

class HistoriqueModifications {
  static selectHistoriqueModifications() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM historique_modifications", (error, results, fields) => {
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

  static insertHistoriqueModification(data) {
    return new Promise((resolve, reject) => {
      const query = `
        INSERT INTO historique_modifications 
        (table_modifiee, id_enregistrement, champ_modifie, ancienne_valeur, nouvelle_valeur, date_modification, id_utilisateur) 
        VALUES (?, ?, ?, ?, ?, ?, ?)
      `;
      const values = [
        data.table_modifiee,
        data.id_enregistrement,
        data.champ_modifie,
        data.ancienne_valeur,
        data.nouvelle_valeur,
        data.date_modification,
        data.id_utilisateur
      ];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted historique_modification with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateHistoriqueModification(id, data) {
    return new Promise((resolve, reject) => {
      const query = `
        UPDATE historique_modifications 
        SET table_modifiee = ?, id_enregistrement = ?, champ_modifie = ?, 
            ancienne_valeur = ?, nouvelle_valeur = ?, date_modification = ?, id_utilisateur = ?
        WHERE id = ?
      `;
      const values = [
        data.table_modifiee,
        data.id_enregistrement,
        data.champ_modifie,
        data.ancienne_valeur,
        data.nouvelle_valeur,
        data.date_modification,
        data.id_utilisateur,
        id
      ];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated historique_modification with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteHistoriqueModification(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM historique_modifications WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted historique_modification with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getHistoriqueModificationById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM historique_modifications WHERE id=?", [id], (error, results, fields) => {
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
  static getHistoriqueModificationByUser(userId) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT * 
        FROM historique_modifications 
        WHERE id_utilisateur = ?
      `;
      connection.query(query, [userId], (error, results, fields) => {
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

export { HistoriqueModifications };
