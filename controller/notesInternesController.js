import { NotesInternes } from "../model/notesInternes.js";

class NotesInternesController {
  static async getNotesInternes(request, response) {
    try {
      const notesInternes = await NotesInternes.selectNotesInternes();
      response.status(200).json(notesInternes);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting notes internes.");
    }
  }

  static async createNoteInterne(request, response) {
    const { sujet, contenu, date_creation, id_auteur, id_succursale } = request.body;

    try {
      const result = await NotesInternes.insertNoteInterne(sujet, contenu, date_creation, id_auteur, id_succursale);
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating note interne.");
    }
  }

  static async updateNoteInterne(request, response) {
    const { id } = request.params;
    const { sujet, contenu } = request.body;

    try {
      await NotesInternes.updateNoteInterne(id, sujet, contenu);
      response.status(200).send("Note interne updated successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating note interne.");
    }
  }

  static async deleteNoteInterne(request, response) {
    const { id } = request.params;

    try {
      await NotesInternes.deleteNoteInterne(id);
      response.status(200).send("Note interne deleted successfully.");
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting note interne.");
    }
  }

  static async getNoteInterneById(request, response) {
    const { id } = request.params;

    try {
      const noteInterne = await NotesInternes.getNoteInterneById(id);
      response.status(200).json(noteInterne);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting note interne by ID.");
    }
  }

  static async getNotesByAuthor(request, response) {
    const { authorId } = request.params;

    try {
      const notesByAuthor = await NotesInternes.getNotesByAuthor(authorId);
      response.status(200).json(notesByAuthor);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting notes by author.");
    }
  }
}

export { NotesInternesController };
