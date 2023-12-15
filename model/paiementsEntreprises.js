import { connection } from "./connexion.js";

class PaiementsEntreprises {
  static selectPaiementsEntreprises() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM paiements_entreprises",
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

  static insertPaiementEntreprise(id_entreprise, date_paiement, montant, id_abonnement) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO paiements_entreprises (id_entreprise, date_paiement, montant, id_abonnement) VALUES (?, ?, ?, ?)";
      const values = [id_entreprise, date_paiement, montant, id_abonnement];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted payment with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updatePaiementEntreprise(id, id_entreprise, date_paiement, montant, id_abonnement) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE paiements_entreprises SET id_entreprise = ?, date_paiement = ?, montant = ?, id_abonnement = ? WHERE id = ?";
      const values = [id_entreprise, date_paiement, montant, id_abonnement, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated payment with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deletePaiementEntreprise(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM paiements_entreprises WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted payment with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getPaiementEntrepriseById(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM paiements_entreprises WHERE id=?",
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

export { PaiementsEntreprises };
