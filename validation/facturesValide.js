import { body, param } from "express-validator";

class FacturesValide {
  static id(str='id') {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de la facture doit être numérique et ne doit pas être vide"
        ),
    ];
  }

  static createFacture() {
    return [
      body("numero")
        .notEmpty()
        .withMessage("Le numéro de la facture ne doit pas être vide"),
      body("date_emission")
        .notEmpty()
        .isDate()
        .withMessage(
          "La date d'émission doit être une date valide et ne doit pas être vide"
        ),
      body("montant_total")
        .notEmpty()
        .isNumeric()
        .withMessage("Le montant total doit être numérique et ne doit pas être vide"),
      body("id_client")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du client doit être numérique et ne doit pas être vide"),
      body("id_vente")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la vente doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateFacture() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de la facture doit être numérique et ne doit pas être vide"
        ),
      body("numero")
        .notEmpty()
        .withMessage("Le numéro de la facture ne doit pas être vide"),
      body("date_emission")
        .notEmpty()
        .isDate()
        .withMessage(
          "La date d'émission doit être une date valide et ne doit pas être vide"
        ),
      body("montant_total")
        .notEmpty()
        .isNumeric()
        .withMessage("Le montant total doit être numérique et ne doit pas être vide"),
      body("id_client")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du client doit être numérique et ne doit pas être vide"),
      body("id_vente")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la vente doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default FacturesValide;
