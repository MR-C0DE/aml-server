import { body, param } from "express-validator";

class CategoriesProduitsValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la catégorie doit être numérique et ne doit pas être vide"),
    ];
  }

  static createCategorieProduit() {
    return [
      body("nom")
        .notEmpty()
        .isString()
        .withMessage("Le nom de la catégorie ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description de la catégorie ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateCategorieProduit() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de la catégorie doit être numérique et ne doit pas être vide"),
      body("nom")
        .notEmpty()
        .isString()
        .withMessage("Le nom de la catégorie ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description de la catégorie ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default CategoriesProduitsValide;
