import { connection } from "./connexion.js";

class Employes {
  static selectEmployes() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employes", (error, results, fields) => {
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

  static insertEmploye(matricule, nom, prenom, date_naissance, adresse, telephone, email, salaire, date_embauche, statut, photo, type_employe, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO employes (matricule, nom, prenom, date_naissance, adresse, telephone, email, salaire, date_embauche, statut, photo, type_employe, id_entreprise) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [matricule, nom, prenom, date_naissance, adresse, telephone, email, salaire, date_embauche, statut, photo, type_employe, id_entreprise];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted employe with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateEmploye(id, matricule, nom, prenom, date_naissance, adresse, telephone, email, salaire, date_embauche, statut, photo, type_employe, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE employes SET matricule = ?, nom = ?, prenom = ?, date_naissance = ?, adresse = ?, telephone = ?, email = ?, salaire = ?, date_embauche = ?, statut = ?, photo = ?, type_employe = ?, id_entreprise = ? WHERE id = ?";
      const values = [matricule, nom, prenom, date_naissance, adresse, telephone, email, salaire, date_embauche, statut, photo, type_employe, id_entreprise, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated employe with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteEmploye(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM employes WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted employe with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getEmployeById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employes WHERE id=?", [id], (error, results, fields) => {
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

  static getEmployeByMatricule(matricule) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM employes WHERE matricule=?", [matricule], (error, results, fields) => {
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
  static getEmployesByType(typeId) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT e.*, te.nom AS type_employe_nom 
        FROM employes e 
        INNER JOIN type_employes te ON e.type_employe = te.id 
        WHERE te.id = ?
      `;
      connection.query(query, [typeId], (error, results, fields) => {
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


  static async generateUniqueMatricule() {
    const digits = "0123456789";
    const matriculeLength = 6;
    let matricule = "";
  
    for (let i = 0; i < matriculeLength; i++) {
      const randomIndex = Math.floor(Math.random() * digits.length);
      matricule += digits.charAt(randomIndex);
    }
  
    const existingEmploye = await Employes.getEmployeByMatricule(matricule);
  
    if (existingEmploye) {
      // Matricule already exists, generate a new one
      return generateUniqueMatricule();
    }
  
    return matricule;
  }
  
}

export { Employes };
