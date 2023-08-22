import { body, param } from "express-validator";

class ProduitsValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du produit doit être numérique et ne doit pas être vide"),
    ];
  }

  static createProduit() {
    return [
      body("nom")
        .notEmpty()
        .withMessage("Le nom du produit ne doit pas être vide"),
      body("description")
        .notEmpty()
        .withMessage("La description du produit ne doit pas être vide"),
      body("quantite")
        .notEmpty()
        .isNumeric()
        .withMessage("La quantité doit être numérique et ne doit pas être vide"),
      body("prix_unitaire")
        .notEmpty()
        .isNumeric()
        .withMessage("Le prix unitaire doit être numérique et ne doit pas être vide"),
      body("seuil")
        .notEmpty()
        .isNumeric()
        .withMessage("Le seuil doit être numérique et ne doit pas être vide"),
      body("code_produit")
        .notEmpty()
        .withMessage("Le code du produit ne doit pas être vide"),
      body("categorie_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la catégorie doit être numérique et ne doit pas être vide"),
      body("id_succursale")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la succursale doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateProduit() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du produit doit être numérique et ne doit pas être vide"),
      body("quantite")
        .notEmpty()
        .isNumeric()
        .withMessage("La quantité doit être numérique et ne doit pas être vide"),
      body("prix_unitaire")
        .notEmpty()
        .isNumeric()
        .withMessage("Le prix unitaire doit être numérique et ne doit pas être vide"),
      body("seuil")
        .notEmpty()
        .isNumeric()
        .withMessage("Le seuil doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default ProduitsValide;
