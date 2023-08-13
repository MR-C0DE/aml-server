import { connection } from "./connexion.js";

class PresencesEmployes {
  static selectPresencesEmployes() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM presences_employes", (error, results, fields) => {
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

  static insertPresenceEmploye(id_succursale, id_employe, heure_arrivee, heure_depart) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO presences_employes (id_succursale, id_employe, heure_arrivee, heure_depart) VALUES (?, ?, ?, ?)";
      const values = [id_succursale, id_employe, heure_arrivee, heure_depart];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted presence_employe with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updatePresenceEmploye(id, id_succursale, id_employe, heure_arrivee, heure_depart) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE presences_employes SET id_succursale = ?, id_employe = ?, heure_arrivee = ?, heure_depart = ? WHERE id = ?";
      const values = [id_succursale, id_employe, heure_arrivee, heure_depart, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated presence_employe with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deletePresenceEmploye(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM presences_employes WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted presence_employe with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getPresenceEmployeById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM presences_employes WHERE id=?", [id], (error, results, fields) => {
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
  static getPresencesForEmployee(employeeId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM presences_employes WHERE id_employe = ?";
      connection.query(query, [employeeId], (error, results, fields) => {
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

  static getPresencesForSuccursale(succursaleId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM presences_employes WHERE id_succursale = ?";
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
}

export { PresencesEmployes };
