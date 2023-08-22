import { body, param } from "express-validator";
import { NotesInternes } from "../model/notesInternes.js";

class NotesInternesValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID doit être numérique et ne doit pas être vide"),
    ];
  }
  static createNoteInterne() {
    return [
      body("sujet").notEmpty().withMessage("Le sujet ne doit pas être vide"),
      body("contenu")
        .notEmpty()
        .withMessage("Le contenu ne doit pas être vide"),
      body("date_creation")
        .notEmpty()
        .isISO8601()
        .withMessage(
          "La date de création doit être une date valide au format ISO8601"
        ),
      body("id_auteur")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'auteur doit être numérique"),
      body("id_succursale")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la succursale doit être numérique"),
    ];
  }

  static updateNoteInterne() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la note interne doit être numérique"),
      body("sujet").notEmpty().withMessage("Le sujet ne doit pas être vide"),
      body("contenu")
        .notEmpty()
        .withMessage("Le contenu ne doit pas être vide"),
    ];
  }
}

export default NotesInternesValide;
