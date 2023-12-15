import { connection } from "./connexion.js";

class PeriodesEssai {
  static selectPeriodesEssai() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM periodes_essai",
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

  static insertPeriodeEssai(id_entreprise, date_debut, duree) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO periodes_essai (id_entreprise, date_debut, duree) VALUES (?, ?, ?)";
      const values = [id_entreprise, date_debut, duree];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted période d'essai with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updatePeriodeEssai(id, id_entreprise, date_debut, duree) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE periodes_essai SET id_entreprise = ?, date_debut = ?, duree = ? WHERE id = ?";
      const values = [id_entreprise, date_debut, duree, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated période d'essai with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deletePeriodeEssai(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM periodes_essai WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted période d'essai with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getPeriodeEssaiById(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM periodes_essai WHERE id=?",
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
}

export { PeriodesEssai };
