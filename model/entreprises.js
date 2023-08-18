import { connection } from "./connexion.js";

class Entreprises {
  static selectEntreprises() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM entreprises",
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

  static insertEntreprise(
    nom,
    pays,
    ville,
    adresse,
    telephone,
    email,
    site_web,
    matricule,
    statut
  ) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO entreprises (nom, pays, ville, adresse, telephone, email, site_web, matricule, statut) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const values = [
        nom,
        pays,
        ville,
        adresse,
        telephone,
        email,
        site_web,
        matricule,
        statut,
      ];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted entreprise with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateEntreprise(
    id,
    nom,
    pays,
    ville,
    adresse,
    telephone,
    email,
    site_web,
    matricule,
    statut
  ) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE entreprises SET nom = ?, pays = ?, ville = ?, adresse = ?, telephone = ?, email = ?, site_web = ?, matricule = ?, statut = ? WHERE id = ?";
      const values = [
        nom,
        pays,
        ville,
        adresse,
        telephone,
        email,
        site_web,
        matricule,
        statut,
        id,
      ];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated entreprise with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteEntreprise(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM entreprises WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted entreprise with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getEntrepriseById(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM entreprises WHERE id=?",
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

  static getEntrepriseByMatricule(matricule) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM entreprises WHERE matricule = ?";
      connection.query(query, [matricule], (error, results, fields) => {
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
  static getEntreprisesInCountry(country) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM entreprises WHERE pays = ?";
      connection.query(query, [country], (error, results, fields) => {
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

  static getEntreprisesWithStatus(status) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM entreprises WHERE statut = ?";
      connection.query(query, [status], (error, results, fields) => {
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
    const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const matriculeLength = 6;
    let matricule = "";

    for (let i = 0; i < matriculeLength; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      matricule += characters.charAt(randomIndex);
    }

    const existingEntreprise = await Entreprises.getEntrepriseByMatricule(
      matricule
    );

    if (existingEntreprise) {
      // Matricule already exists, generate a new one
      return generateUniqueMatricule();
    }

    return matricule;
  }
}

export { Entreprises };
