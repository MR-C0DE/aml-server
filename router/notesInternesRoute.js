import { Router } from "express";
import { NotesInternesController } from "../controller/notesInternesController.js";

const routerNotesInternes = Router();

// Récupérer toutes les notes internes
routerNotesInternes.get("/", NotesInternesController.getNotesInternes);

// Récupérer une note interne par ID
routerNotesInternes.get("/:id", NotesInternesController.getNoteInterneById);

// Ajouter une nouvelle note interne
routerNotesInternes.post("/", NotesInternesController.createNoteInterne);

// Mettre à jour les informations d'une note interne
routerNotesInternes.put("/:id", NotesInternesController.updateNoteInterne);

// Supprimer une note interne
routerNotesInternes.delete("/:id", NotesInternesController.deleteNoteInterne);

// Récupérer les notes internes par auteur
routerNotesInternes.get("/author/:authorId", NotesInternesController.getNotesByAuthor);

export default routerNotesInternes;
