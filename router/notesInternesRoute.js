import { Router } from "express";
import { NotesInternesController } from "../controller/notesInternesController.js";
import NotesInternesValide from "../validation/notesInternesValide.js";
const routerNotesInternes = Router();

// Récupérer toutes les notes internes
routerNotesInternes.get("/", NotesInternesController.getNotesInternes);

// Récupérer une note interne par ID
routerNotesInternes.get("/:id", NotesInternesValide.id("id"),  NotesInternesController.getNoteInterneById);

// Ajouter une nouvelle note interne
routerNotesInternes.post("/", NotesInternesValide.createNoteInterne(), NotesInternesController.createNoteInterne);

// Mettre à jour les informations d'une note interne
routerNotesInternes.put("/:id", NotesInternesValide.updateNoteInterne() ,NotesInternesController.updateNoteInterne);

// Supprimer une note interne
routerNotesInternes.delete("/:id", NotesInternesValide.id("id"), NotesInternesController.deleteNoteInterne);

// Récupérer les notes internes par auteur
routerNotesInternes.get("/author/:authorId", NotesInternesValide.id("authorId") , NotesInternesController.getNotesByAuthor);

export default routerNotesInternes;
