import { body, param } from "express-validator";

class UnitesMonetairesValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'unité monétaire doit être numérique et ne doit pas être vide"),
    ];
  }

  static createUniteMonetaire() {
    return [
      body("code")
        .notEmpty()
        .isString()
        .withMessage("Le code de l'unité monétaire ne doit pas être vide"),
      body("nom")
        .notEmpty()
        .isString()
        .withMessage("Le nom de l'unité monétaire ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateUniteMonetaire() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'unité monétaire doit être numérique et ne doit pas être vide"),
      body("code")
        .notEmpty()
        .isString()
        .withMessage("Le code de l'unité monétaire ne doit pas être vide"),
      body("nom")
        .notEmpty()
        .isString()
        .withMessage("Le nom de l'unité monétaire ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default UnitesMonetairesValide;
