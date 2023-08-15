import { connection } from "./connexion.js";

class CommandesFournisseurs {
  static selectCommandesFournisseurs() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM commandes_fournisseurs", (error, results, fields) => {
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

  static insertCommandeFournisseur(id_achat, id_produit, quantite, prix_achats) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO commandes_fournisseurs (id_achat, id_produit, quantite, prix_achats) VALUES (?, ?, ?, ?)";
      const values = [id_achat, id_produit, quantite, prix_achats];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted commande_fournisseur with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateCommandeFournisseur(id, id_achat, id_produit, quantite, prix_achats) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE commandes_fournisseurs SET id_achat = ?, id_produit = ?, quantite = ?, prix_achats = ? WHERE id = ?";
      const values = [id_achat, id_produit, quantite, prix_achats, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated commande_fournisseur with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteCommandeFournisseur(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM commandes_fournisseurs WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted commande_fournisseur with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getCommandeFournisseurById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM commandes_fournisseurs WHERE id=?", [id], (error, results, fields) => {
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
  static getCommandesForAchat(achatId) {
    return new Promise((resolve, reject) => {
      const query = `
        SELECT cf.*, p.nom AS nom_produit
        FROM commandes_fournisseurs cf
        INNER JOIN produits p ON cf.id_produit = p.id
        WHERE cf.id_achat = ?
      `;
      connection.query(query, [achatId], (error, results, fields) => {
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

export { CommandesFournisseurs };
