import { connection } from "./connexion.js";

class Produits {
  static selectProduits() {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM produits",
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

  static insertProduit(nom, description, quantite, prix_unitaire, id_type_produit, seuil, code_produit, id_succursale) {
    return new Promise((resolve, reject) => {
      const query =
        "INSERT INTO produits (nom, description, quantite, prix_unitaire, date_ajout, date_derniere_maj, id_type_produit, seuil, code_produit, id_succursale) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
      const date_ajout = new Date().toISOString().slice(0, 19).replace('T', ' ');
      const date_derniere_maj = date_ajout;
      const values = [nom, description, quantite, prix_unitaire, date_ajout, date_derniere_maj, id_type_produit, seuil, code_produit, id_succursale];
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

  static updateProduit(id, nom, description, quantite, prix_unitaire, seuil, code_produit, id_succursale) {
    return new Promise((resolve, reject) => {
      const query =
        "UPDATE produits SET nom = ?, description = ?, quantite = ?, prix_unitaire = ?, date_derniere_maj = ?, seuil = ?, code_produit = ?, id_succursale = ? WHERE id = ?";
      const date_derniere_maj = new Date().toISOString().slice(0, 19).replace('T', ' ');
      const values = [nom, description, quantite, prix_unitaire, date_derniere_maj, seuil, code_produit, id_succursale, id];
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
      connection.query(
        "SELECT * FROM produits WHERE id = ?",
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

  static getProduitByCodeProduit(code_produit) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM produits WHERE code_produit = ?",
        [code_produit],
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

  static getProduitByIdType(id_type_produit) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM produits WHERE id_type_produit = ?  ORDER BY id DESC",
        [id_type_produit],
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

  static getProduitByIdSuccursale(id_succursale) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM produits WHERE id_succursale = ?",
        [id_succursale],
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
}

export { Produits };
