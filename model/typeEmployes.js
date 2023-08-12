import { connection } from "./connexion.js";

class TypeEmployes {
  // Sélectionner tous les types d'employés
  static selectAllTypesEmployes() {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM type_employes";
      connection.query(query, (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }

  // Sélectionner un type d'employé par ID
  static selectTypeEmployeById(typeEmployeId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM type_employes WHERE id = ?";
      connection.query(query, [typeEmployeId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results[0]);
        }
      });
    });
  }

  // Insérer un nouveau type d'employé
  static insertTypeEmploye(nom, description) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO type_employes (nom, description) VALUES (?, ?)";
      connection.query(query, [nom, description], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.insertId);
        }
      });
    });
  }

  // Mettre à jour un type d'employé
  static updateTypeEmploye(typeEmployeId, nom, description) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE type_employes SET nom = ?, description = ? WHERE id = ?";
      connection.query(query, [nom, description, typeEmployeId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  }

  // Supprimer un type d'employé
  static deleteTypeEmploye(typeEmployeId) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM type_employes WHERE id = ?";
      connection.query(query, [typeEmployeId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results.affectedRows);
        }
      });
    });
  }

  // Sélectionner les employés appartenant à un type spécifique
  static selectEmployesByType(typeEmployeId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM employes WHERE type_employe = ?";
      connection.query(query, [typeEmployeId], (error, results) => {
        if (error) {
          reject(error);
        } else {
          resolve(results);
        }
      });
    });
  }
}

export { TypeEmployes };
