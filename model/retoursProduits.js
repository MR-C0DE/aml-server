import { connection } from "./connexion.js";

class RetoursProduits {
  static selectRetoursProduits() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM retours_produits", (error, results, fields) => {
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

  static insertRetourProduit(id_vente, id_produit, quantite, raison, date_retour) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO retours_produits (id_vente, id_produit, quantite, raison, date_retour) VALUES (?, ?, ?, ?, ?)";
      const values = [id_vente, id_produit, quantite, raison, date_retour];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted retour_produit with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateRetourProduit(id, id_vente, id_produit, quantite, raison, date_retour) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE retours_produits SET id_vente = ?, id_produit = ?, quantite = ?, raison = ?, date_retour = ? WHERE id = ?";
      const values = [id_vente, id_produit, quantite, raison, date_retour, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated retour_produit with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteRetourProduit(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM retours_produits WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted retour_produit with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getRetourProduitById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM retours_produits WHERE id=?", [id], (error, results, fields) => {
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
  static getRetoursProduitsByVente(venteId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM retours_produits WHERE id_vente = ?";
      connection.query(query, [venteId], (error, results, fields) => {
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

export { RetoursProduits };
