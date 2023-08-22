import { body, param } from "express-validator";

class PresencesEmployesValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID doit être numérique et ne doit pas être vide"),
    ];
  }

  static createPresenceEmploye() {
    return [
      body("id_succursale")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la succursale doit être numérique et ne doit pas être vide"),
      body("id_employe")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'employé doit être numérique et ne doit pas être vide"),
      body("heure_arrivee")
        .notEmpty()
        .isDate()
        .withMessage("L'heure d'arrivée doit être une date valide et ne doit pas être vide"),
      body("heure_depart")
        .notEmpty()
        .isDate()
        .withMessage("L'heure de départ doit être une date valide et ne doit pas être vide"),
    ];
  }

  static updatePresenceEmploye() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID doit être numérique et ne doit pas être vide"),
      body("id_succursale")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la succursale doit être numérique et ne doit pas être vide"),
      body("id_employe")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'employé doit être numérique et ne doit pas être vide"),
      body("heure_arrivee")
        .notEmpty()
        .isDate()
        .withMessage("L'heure d'arrivée doit être une date valide et ne doit pas être vide"),
      body("heure_depart")
        .notEmpty()
        .isDate()
        .withMessage("L'heure de départ doit être une date valide et ne doit pas être vide"),
    ];
  }
}

export default PresencesEmployesValide;
