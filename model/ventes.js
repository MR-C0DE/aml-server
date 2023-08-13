import { connection } from "./connexion.js";

class Ventes {
  static selectVentes() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM ventes", (error, results, fields) => {
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

  static insertVente(date_vente, montant_total, id_succursale, id_employe) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO ventes (date_vente, montant_total, id_succursale, id_employe) VALUES (?, ?, ?, ?)";
      const values = [date_vente, montant_total, id_succursale, id_employe];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted vente with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateVente(id, date_vente, montant_total, id_succursale, id_employe) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE ventes SET date_vente = ?, montant_total = ?, id_succursale = ?, id_employe = ? WHERE id = ?";
      const values = [date_vente, montant_total, id_succursale, id_employe, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated vente with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteVente(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM ventes WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted vente with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getVenteById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM ventes WHERE id=?", [id], (error, results, fields) => {
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
  static getVentesBySuccursale(succursaleId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM ventes WHERE id_succursale = ?";
      connection.query(query, [succursaleId], (error, results, fields) => {
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

  static getVentesByEmploye(employeId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM ventes WHERE id_employe = ?";
      connection.query(query, [employeId], (error, results, fields) => {
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

export { Ventes };
