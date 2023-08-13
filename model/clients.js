import { connection } from "./connexion.js";

class Clients {
  static selectClients() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM clients", (error, results, fields) => {
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

  static insertClient(nom, prenom, adresse, telephone, email, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO clients (nom, prenom, adresse, telephone, email, id_entreprise) VALUES (?, ?, ?, ?, ?, ?)";
      const values = [nom, prenom, adresse, telephone, email, id_entreprise];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted client with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateClient(id, nom, prenom, adresse, telephone, email) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE clients SET nom = ?, prenom = ?, adresse = ?, telephone = ?, email = ? WHERE id = ?";
      const values = [nom, prenom, adresse, telephone, email, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated client with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteClient(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM clients WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted client with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getClientById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM clients WHERE id=?", [id], (error, results, fields) => {
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
  static getClientsByEnterprise(enterpriseId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM clients WHERE id_entreprise = ?";
      connection.query(query, [enterpriseId], (error, results, fields) => {
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

export { Clients };
