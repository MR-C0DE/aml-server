import { body, param } from "express-validator";

class JournalisationsOperationsValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'opération doit être numérique et ne doit pas être vide"),
    ];
  }

  static createJournalisationOperation() {
    return [
      body("date_operation")
        .notEmpty()
        .isDate()
        .withMessage("La date d'opération doit être une date valide et ne doit pas être vide"),
      body("id_utilisateur")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique et ne doit pas être vide"),
      body("type_operation")
        .notEmpty()
        .isString()
        .withMessage("Le type d'opération ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description ne doit pas être vide"),
    ];
  }

  static updateJournalisationOperation() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'opération doit être numérique et ne doit pas être vide"),
      body("date_operation")
        .notEmpty()
        .isDate()
        .withMessage("La date d'opération doit être une date valide et ne doit pas être vide"),
      body("id_utilisateur")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique et ne doit pas être vide"),
      body("type_operation")
        .notEmpty()
        .isString()
        .withMessage("Le type d'opération ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description ne doit pas être vide"),
    ];
  }
}

export default JournalisationsOperationsValide;
