import { body, param } from "express-validator";

class EmployesValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'employé doit être numérique et ne doit pas être vide"),
    ];
  }

  static createEmploye() {
    return [
      body("matricule")
        .notEmpty()
        .isString()
        .withMessage("Le matricule de l'employé ne doit pas être vide"),
      body("nom")
        .notEmpty()
        .isString()
        .withMessage("Le nom de l'employé ne doit pas être vide"),
      body("salaire")
        .notEmpty()
        .isNumeric()
        .withMessage("Le salaire de l'employé doit être numérique et ne doit pas être vide"),
      body("date_embauche")
        .notEmpty()
        .isDate()
        .withMessage("La date d'embauche doit être une date valide et ne doit pas être vide"),
      body("type_employe")
        .notEmpty()
        .isNumeric()
        .withMessage("Le type de l'employé doit être numérique et ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateEmploye() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'employé doit être numérique et ne doit pas être vide"),
      body("matricule")
        .notEmpty()
        .isString()
        .withMessage("Le matricule de l'employé ne doit pas être vide"),
      body("nom")
        .notEmpty()
        .isString()
        .withMessage("Le nom de l'employé ne doit pas être vide"),
      body("salaire")
        .notEmpty()
        .isNumeric()
        .withMessage("Le salaire de l'employé doit être numérique et ne doit pas être vide"),
      body("date_embauche")
        .notEmpty()
        .isDate()
        .withMessage("La date d'embauche doit être une date valide et ne doit pas être vide"),
      body("statut")
        .notEmpty()
        .isString()
        .withMessage("Le statut de l'employé ne doit pas être vide"),
      body("type_employe")
        .notEmpty()
        .isNumeric()
        .withMessage("Le type de l'employé doit être numérique et ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default EmployesValide;
