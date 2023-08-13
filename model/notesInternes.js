import { connection } from "./connexion.js";

class NotesInternes {
  static selectNotesInternes() {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM notes_internes", (error, results, fields) => {
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

  static insertNoteInterne(sujet, contenu, date_creation, id_auteur, id_succursale) {
    return new Promise((resolve, reject) => {
      const query = "INSERT INTO notes_internes (sujet, contenu, date_creation, id_auteur, id_succursale) VALUES (?, ?, ?, ?, ?)";
      const values = [sujet, contenu, date_creation, id_auteur, id_succursale];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Inserted note_interne with ID:", results.insertId);
          resolve(results);
        }
      });
    });
  }

  static updateNoteInterne(id, sujet, contenu) {
    return new Promise((resolve, reject) => {
      const query = "UPDATE notes_internes SET sujet = ?, contenu = ? WHERE id = ?";
      const values = [sujet, contenu, id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Updated note_interne with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static deleteNoteInterne(id) {
    return new Promise((resolve, reject) => {
      const query = "DELETE FROM notes_internes WHERE id = ?";
      const values = [id];
      connection.query(query, values, (error, results, fields) => {
        if (error) {
          console.error("Error executing query:", error);
          reject(error);
        } else {
          console.log("Deleted note_interne with ID:", id);
          resolve(results);
        }
      });
    });
  }

  static getNoteInterneById(id) {
    return new Promise((resolve, reject) => {
      connection.query("SELECT * FROM notes_internes WHERE id=?", [id], (error, results, fields) => {
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
  static getNotesByAuthor(authorId) {
    return new Promise((resolve, reject) => {
      const query = "SELECT * FROM notes_internes WHERE id_auteur = ?";
      connection.query(query, [authorId], (error, results, fields) => {
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

export { NotesInternes };
