import { body, param } from "express-validator";

class TransactionsCaisseValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la transaction doit être numérique et ne doit pas être vide"),
    ];
  }

  static createTransactionCaisse() {
    return [
      body("montant")
        .notEmpty()
        .isNumeric()
        .withMessage("Le montant doit être numérique et ne doit pas être vide"),
      body("type")
        .notEmpty()
        .isString()
        .withMessage("Le type de transaction doit être une chaîne de caractères valide et ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description de la transaction doit être une chaîne de caractères valide et ne doit pas être vide"),
      body("date_transaction")
        .notEmpty()
        .isDate()
        .withMessage("La date de transaction doit être une date valide et ne doit pas être vide"),
    ];
  }

  static updateTransactionCaisse() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la transaction doit être numérique et ne doit pas être vide"),
      body("montant")
        .notEmpty()
        .isNumeric()
        .withMessage("Le montant doit être numérique et ne doit pas être vide"),
      body("type")
        .notEmpty()
        .isString()
        .withMessage("Le type de transaction doit être une chaîne de caractères valide et ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description de la transaction doit être une chaîne de caractères valide et ne doit pas être vide"),
      body("date_transaction")
        .notEmpty()
        .isDate()
        .withMessage("La date de transaction doit être une date valide et ne doit pas être vide"),
    ];
  }

}

export default TransactionsCaisseValide;
