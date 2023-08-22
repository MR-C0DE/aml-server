import { body, param } from "express-validator";

class HistoriquePrixValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'historique de prix doit être numérique et ne doit pas être vide"),
    ];
  }

  static createHistoriquePrix() {
    return [
      body("id_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du produit doit être numérique et ne doit pas être vide"),
      body("prix_unitaire")
        .notEmpty()
        .isNumeric()
        .withMessage("Le prix unitaire doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateHistoriquePrix() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'historique de prix doit être numérique et ne doit pas être vide"),
      body("prix_unitaire")
        .notEmpty()
        .isNumeric()
        .withMessage("Le prix unitaire doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default HistoriquePrixValide;
