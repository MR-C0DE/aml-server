import { body, param } from "express-validator";

class TransfertsProduitsValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du transfert de produit doit être numérique et ne doit pas être vide"),
    ];
  }

  static createTransfertProduit() {
    return [
      body("date_transaction")
        .notEmpty()
        .isDate()
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

  static updateTransfertProduit() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du transfert de produit doit être numérique et ne doit pas être vide"),
      body("date_transaction")
        .notEmpty()
        .isDate()
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

export default TransfertsProduitsValide;
