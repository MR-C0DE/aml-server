import { body, param } from "express-validator";

class TransactionsValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la transaction doit être numérique et ne doit pas être vide"),
    ];
  }

  static createTransaction() {
    return [
      body("type")
        .notEmpty()
        .isString()
        .withMessage("Le type de transaction ne doit pas être vide"),
      body("date_transaction")
        .notEmpty()
        .isISO8601()
        .toDate()
        .withMessage("La date de transaction doit être une date valide et ne doit pas être vide"),
      body("montant")
        .notEmpty()
        .isNumeric()
        .withMessage("Le montant doit être numérique et ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateTransaction() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la transaction doit être numérique et ne doit pas être vide"),
      body("type")
        .notEmpty()
        .isString()
        .withMessage("Le type de transaction ne doit pas être vide"),
      body("date_transaction")
        .notEmpty()
        .isISO8601()
        .toDate()
        .withMessage("La date de transaction doit être une date valide et ne doit pas être vide"),
      body("montant")
        .notEmpty()
        .isNumeric()
        .withMessage("Le montant doit être numérique et ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default TransactionsValide;
