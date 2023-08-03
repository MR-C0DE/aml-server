import { connection } from "./connexion.js";

class Succursale {
    static selectSuccursale() {
        return new Promise((resolve, reject) => {
            connection.query("SELECT * FROM succursale", (error, results, fields) => {
                if (error) {
                    console.error("Error executing query:", error);
                    reject(error);
                } else {
                    //console.log("Query results:", results);
                    resolve(results);
                }
            });
        });
    }
    

  static addSuccursale(succursale) {
    connection.query(
      "INSERT INTO succursale (nom, adresse, ville, code_emplacement, pays, telephone, email) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [
        succursale.nom,
        succursale.adresse,
        succursale.ville,
        succursale.code_emplacement,
        succursale.pays,
        succursale.telephone,
        succursale.email,
      ],
      (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          return false;
        } else {
          console.log("Succursale added successfully");
          return true;
        }
      }
    );
  }

  static updateSuccursale(succursale) {
    connection.query(
      "UPDATE succursale SET nom=?, adresse=?, ville=?, code_emplacement=?, pays=?, telephone=?, email=? WHERE id=?",
      [
        succursale.nom,
        succursale.adresse,
        succursale.ville,
        succursale.code_emplacement,
        succursale.pays,
        succursale.telephone,
        succursale.email,
        succursale.id,
      ],
      (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          return false;
        } else {
          console.log("Succursale updated successfully");
          return true;
        }
      }
    );
  }

  static deleteSuccursale(id) {
    connection.query(
      "DELETE FROM succursale WHERE id=?",
      [id],
      (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          return false;
        } else {
          console.log("Succursale deleted successfully");
          return true;
        }
      }
    );
  }
  static getSuccursaleById(id) {
    connection.query(
      "SELECT * FROM succursale WHERE id=?",
      [id],
      (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          return null;
        } else {
          console.log(`Succursale with ID ${id}:`, results[0]);
          return results[0];
        }
      }
    );
  }
  static getSuccursaleByCode(code) {
    return new Promise((resolve, reject) => {
      connection.query(
        "SELECT * FROM succursale WHERE code_emplacement = ?",
        [code],
        (error, results, fields) => {
          if (error) {
            console.error("Error executing query:", error);
            reject(error);
          } else if (results.length === 0) {
            console.log("No results found");
            resolve(null);
          } else {
            console.log("Query results:", results[0]);
            resolve(results[0]);
          }
        }
      );
    });
  }
}

export { Succursale };
