import { body, param } from "express-validator";

class CommandesFournisseursValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la commande fournisseur doit être numérique et ne doit pas être vide"),
    ];
  }

  static createCommandeFournisseur() {
    return [
      body("id_achat")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'achat doit être numérique et ne doit pas être vide"),
      body("id_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du produit doit être numérique et ne doit pas être vide"),
      body("quantite")
        .notEmpty()
        .isNumeric()
        .withMessage("La quantité doit être numérique et ne doit pas être vide"),
      body("prix_achats")
        .notEmpty()
        .isFloat({ min: 0 })
        .withMessage("Le prix d'achat doit être un nombre positif et ne doit pas être vide"),
    ];
  }

  static updateCommandeFournisseur() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la commande fournisseur doit être numérique et ne doit pas être vide"),
      body("id_achat")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'achat doit être numérique et ne doit pas être vide"),
      body("id_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du produit doit être numérique et ne doit pas être vide"),
      body("quantite")
        .notEmpty()
        .isNumeric()
        .withMessage("La quantité doit être numérique et ne doit pas être vide"),
      body("prix_achats")
        .notEmpty()
        .isFloat({ min: 0 })
        .withMessage("Le prix d'achat doit être un nombre positif et ne doit pas être vide"),
    ];
  }
}

export default CommandesFournisseursValide;
