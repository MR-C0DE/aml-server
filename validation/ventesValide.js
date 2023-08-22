import { body, param } from "express-validator";

class VentesValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de la vente doit être numérique et ne doit pas être vide"
        ),
    ];
  }

  static createVente() {
    return [
      body("date_vente")
        .notEmpty()
        .isISO8601()
        .withMessage(
          "La date de vente doit être une date valide au format ISO8601 et ne doit pas être vide"
        ),
      body("montant_total")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "Le montant total doit être numérique et ne doit pas être vide"
        ),
      body("id_succursale")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de la succursale doit être numérique et ne doit pas être vide"
        ),
      body("id_employe")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de l'employé doit être numérique et ne doit pas être vide"
        ),
    ];
  }

  static updateVente() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de la vente doit être numérique et ne doit pas être vide"
        ),
      body("date_vente")
        .notEmpty()
        .isISO8601()
        .withMessage(
          "La date de vente doit être une date valide au format ISO8601 et ne doit pas être vide"
        ),
      body("montant_total")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "Le montant total doit être numérique et ne doit pas être vide"
        ),
      body("id_succursale")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de la succursale doit être numérique et ne doit pas être vide"
        ),
      body("id_employe")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de l'employé doit être numérique et ne doit pas être vide"
        ),
    ];
  }
}

export default VentesValide;
