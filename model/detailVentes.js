import { connection } from "./connexion.js";

class DetailsVentes {
  static selectDetailsVentes() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM details_ventes", (error, results, fields) => {
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

  static insertDetailsVente(id_vente, id_produit, quantite, prix_unitaire) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO details_ventes (id_vente, id_produit, quantite, prix_unitaire) VALUES (?, ?, ?, ?)";
      const values = [id_vente, id_produit, quantite, prix_unitaire];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted details_vente with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateDetailsVente(id, id_vente, id_produit, quantite, prix_unitaire) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE details_ventes SET id_vente = ?, id_produit = ?, quantite = ?, prix_unitaire = ? WHERE id = ?";
      const values = [id_vente, id_produit, quantite, prix_unitaire, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated details_vente with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteDetailsVente(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM details_ventes WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted details_vente with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getDetailsVenteById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM details_ventes WHERE id=?", [id], (error, results, fields) => {
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
  static getDetailsVenteByVenteId(venteId) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM details_ventes WHERE id_vente=?", [venteId], (error, results, fields) => {
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

  // Add more methods as needed
}

export { DetailsVentes };
