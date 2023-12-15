import { connection } from "./connexion.js";

class Abonnements {
  static selectAbonnements() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM abonnements",
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

  static insertAbonnement(id_entreprise, montant, duree, date_debut, date_prochain_paiement, a_paye) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO abonnements (id_entreprise, montant, duree, date_debut, date_prochain_paiement, a_paye) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [id_entreprise, montant, duree, date_debut, date_prochain_paiement, a_paye];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted abonnement with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateAbonnement(id, id_entreprise, duree, date_debut, date_prochain_paiement) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE abonnements SET id_entreprise = ?, duree = ?, date_debut = ?, date_prochain_paiement = ? WHERE id = ?";
      const values = [id_entreprise, duree, date_debut, date_prochain_paiement, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated abonnement with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteAbonnement(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM abonnements WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted abonnement with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getAbonnementById(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM abonnements WHERE id=?",
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

  static getAbonnementByIdEntreprise(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM abonnements WHERE id_entreprise=?",
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

export { Abonnements };
