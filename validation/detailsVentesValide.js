import { body, param } from "express-validator";

class DetailsVentesValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de détails de vente doit être numérique et ne doit pas être vide"),
    ];
  }

  static createDetailsVente() {
    return [
      body("id_vente")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de vente doit être numérique et ne doit pas être vide"),
      body("id_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de produit doit être numérique et ne doit pas être vide"),
      body("quantite")
        .notEmpty()
        .isInt({ min: 1 })
        .withMessage("La quantité doit être un nombre entier positif"),
      body("prix_unitaire")
        .notEmpty()
        .isDecimal({ decimal_digits: '2' })
        .withMessage("Le prix unitaire doit être un nombre décimal avec deux décimales"),
    ];
  }

  static updateDetailsVente() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de détails de vente doit être numérique et ne doit pas être vide"),
      body("id_vente")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de vente doit être numérique et ne doit pas être vide"),
      body("id_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de produit doit être numérique et ne doit pas être vide"),
      body("quantite")
        .notEmpty()
        .isInt({ min: 1 })
        .withMessage("La quantité doit être un nombre entier positif"),
      body("prix_unitaire")
        .notEmpty()
        .isDecimal({ decimal_digits: '2' })
        .withMessage("Le prix unitaire doit être un nombre décimal avec deux décimales"),
    ];
  }
}

export default DetailsVentesValide;
