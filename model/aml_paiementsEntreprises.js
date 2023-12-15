import { connection } from "./connexion.js";

class AML_PaiementsEntreprises {
  static selectPaiementsEntreprises() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM aml_paiements_entreprises",
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

  static insertPaiementEntreprise(date_paiement, montant, id_abonnement) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO aml_paiements_entreprises (date_paiement, montant, id_abonnement) VALUES (?, ?, ?, ?)";
      const values = [date_paiement, montant, id_abonnement];
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

  static updatePaiementEntreprise(id, date_paiement, montant, id_abonnement) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE aml_paiements_entreprises SET id_entreprise = ?, date_paiement = ?, montant = ?, id_abonnement = ? WHERE id = ?";
      const values = [date_paiement, montant, id_abonnement, id];
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
      const query = "DELETE FROM aml_paiements_entreprises WHERE id = ?";
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
        "SELECT * FROM aml_paiements_entreprises WHERE id=?",
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

export { AML_PaiementsEntreprises };
