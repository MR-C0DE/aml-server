import { body, param } from "express-validator";

class TypeEmployesValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du type d'employé doit être numérique et ne doit pas être vide"),
    ];
  }

  static createTypeEmploye() {
    return [
      body("nom")
        .notEmpty()
        .isString()
        .withMessage("Le nom du type d'employé ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description du type d'employé ne doit pas être vide"),
    ];
  }

  static updateTypeEmploye() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du type d'employé doit être numérique et ne doit pas être vide"),
      body("nom")
        .notEmpty()
        .isString()
        .withMessage("Le nom du type d'employé ne doit pas être vide"),
      body("description")
        .notEmpty()
        .isString()
        .withMessage("La description du type d'employé ne doit pas être vide"),
    ];
  }

  // Vous pouvez ajouter d'autres méthodes de validation en fonction de vos besoins

}

export default TypeEmployesValide;
