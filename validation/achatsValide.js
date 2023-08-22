import { body, param } from "express-validator";

class AchatsValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de l'achat doit être numérique et ne doit pas être vide"
        ),
    ];
  }

  static createAchat() {
    return [

      body("date_achat")
        .notEmpty()
        .isString()
        .withMessage(
          "La date d'achat doit être une date valide et ne doit pas être vide"
        ),
      body("id_fournisseur")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID du fournisseur doit être numérique et ne doit pas être vide"
        ),
      body("montant_total")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "Le montant total doit être numérique et ne doit pas être vide"
        ),
    ];
  }

  static updateAchat() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de l'achat doit être numérique et ne doit pas être vide"
        ),
      body("date_achat")
        .notEmpty()
        .isDate()
        .withMessage(
          "La date d'achat doit être une date valide et ne doit pas être vide"
        ),
      body("id_fournisseur")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID du fournisseur doit être numérique et ne doit pas être vide"
        ),
      body("montant_total")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "Le montant total doit être numérique et ne doit pas être vide"
        ),
    ];
  }

}

export default AchatsValide;
