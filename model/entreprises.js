import { connection } from "./connexion.js";

class Entreprises {
  // CREATE: Insérer une nouvelle entreprise dans la table
  static createEntreprise(nom, pays, ville, adresse, telephone, email, site_web) {
    const query = "INSERT INTO entreprises (nom, pays, ville, adresse, telephone, email, site_web) VALUES (?, ?, ?, ?, ?, ?, ?)";
    const values = [nom, pays, ville, adresse, telephone, email, site_web];

    return new Promise((resolve, reject) => {
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }

  // READ: Sélectionner toutes les entreprises
  static selectEntreprises() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM entreprises", (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  // READ: Sélectionner une entreprise par ID
  static selectEntrepriseById(id) {
    const query = "SELECT * FROM entreprises WHERE id = ?";
    const values = [id];

    return new Promise((resolve, reject) => {
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  // UPDATE: Mettre à jour les informations d'une entreprise
  static updateEntreprise(id, newInfo) {
    const query = "UPDATE entreprises SET ? WHERE id = ?";
    const values = [newInfo, id];

    return new Promise((resolve, reject) => {
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  }

  // DELETE: Supprimer une entreprise par ID
  static deleteEntreprise(id) {
    const query = "DELETE FROM entreprises WHERE id = ?";
    const values = [id];

    return new Promise((resolve, reject) => {
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  }

  // Autres méthodes avancées...

  // Sélectionner les entreprises avec le nombre total d'employés
  static selectEntreprisesWithTotalEmployees() {
    const query = "SELECT e.*, COUNT(em.id) AS total_employes FROM entreprises e LEFT JOIN employes em ON e.id = em.id_entreprise GROUP BY e.id";
    
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Sélectionner les entreprises avec leurs fournisseurs
  static selectEntreprisesWithSuppliers() {
    const query = "SELECT e.*, f.nom AS nom_fournisseur FROM entreprises e LEFT JOIN fournisseurs f ON e.id = f.id_entreprise";
    
    return new Promise((resolve, reject) => {
      connection.query(query, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

export { Entreprises };
