import { connection } from "./connexion.js";

class Produits {
  static selectProduits() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM produits", (error, results, fields) => {
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

  static insertProduit(nom, description, quantite, prix_unitaire, seuil, code_produit, categorie_produit, id_succursale) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO produits (nom, description, quantite, prix_unitaire, seuil, code_produit, categorie_produit, id_succursale, date_ajout, date_derniere_maj) VALUES (?, ?, ?, ?, ?, ?, ?, ?, NOW(), NOW())";
      const values = [nom, description, quantite, prix_unitaire, seuil, code_produit, categorie_produit, id_succursale];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted produit with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateProduit(id, quantite, prix_unitaire, seuil) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE produits SET quantite = ?, prix_unitaire = ?, seuil = ?, date_derniere_maj = NOW() WHERE id = ?";
      const values = [quantite, prix_unitaire, seuil, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated produit with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteProduit(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM produits WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted produit with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getProduitById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM produits WHERE id=?", [id], (error, results, fields) => {
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
  static getProduitsByCategorie(categorieId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM produits WHERE categorie_produit = ?";
      connection.query(query, [categorieId], (error, results, fields) => {
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

  static getProduitsBySuccursale(succursaleId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM produits WHERE id_succursale = ?";
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

export { Produits };
