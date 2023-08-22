import { body, param } from "express-validator";

class RetoursProduitsValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du retour produit doit être numérique et ne doit pas être vide"),
    ];
  }

  static createRetourProduit() {
    return [
      body("id_vente")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la vente doit être numérique et ne doit pas être vide"),
      body("id_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du produit doit être numérique et ne doit pas être vide"),
      body("quantite")
        .notEmpty()
        .isNumeric()
        .withMessage("La quantité doit être numérique et ne doit pas être vide"),
      body("raison")
        .notEmpty()
        .isString()
        .withMessage("La raison ne doit pas être vide"),
      body("date_retour")
        .notEmpty()
        .isDate()
        .withMessage("La date de retour doit être une date valide et ne doit pas être vide"),
    ];
  }

  static updateRetourProduit() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du retour produit doit être numérique et ne doit pas être vide"),
      body("id_vente")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la vente doit être numérique et ne doit pas être vide"),
      body("id_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du produit doit être numérique et ne doit pas être vide"),
      body("quantite")
        .notEmpty()
        .isNumeric()
        .withMessage("La quantité doit être numérique et ne doit pas être vide"),
      body("raison")
        .notEmpty()
        .isString()
        .withMessage("La raison ne doit pas être vide"),
      body("date_retour")
        .notEmpty()
        .isDate()
        .withMessage("La date de retour doit être une date valide et ne doit pas être vide"),
    ];
  }
}

export default RetoursProduitsValide;
