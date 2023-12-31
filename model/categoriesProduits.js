import { connection } from "./connexion.js";

class CategoriesProduits {
  static selectCategoriesProduits() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM categories_produits", (error, results, fields) => {
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

  static insertCategorieProduit(nom, description, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO categories_produits (nom, description, id_entreprise) VALUES (?, ?, ?)";
      const values = [nom, description, id_entreprise];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted categorie_produit with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateCategorieProduit(id, nom, description, id_entreprise) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE categories_produits SET nom = ?, description = ?, id_entreprise = ? WHERE id = ?";
      const values = [nom, description, id_entreprise, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated categorie_produit with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteCategorieProduit(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM categories_produits WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted categorie_produit with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getCategorieProduitById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM categories_produits WHERE id=?", [id], (error, results, fields) => {
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
  static getProduitsInCategorie(categorieId) {
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
}

export { CategoriesProduits };
