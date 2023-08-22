import { body, param } from "express-validator";

class TypeSuccursalesValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID doit être numérique et ne doit pas être vide"),
    ];
  }

  static createTypeSuccursale() {
    return [
      body("entite")
        .notEmpty()
        .isString()
        .withMessage("L'entité doit être une chaîne non vide"),
    ];
  }

  static updateTypeSuccursale() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID doit être numérique et ne doit pas être vide"),
      body("entite")
        .notEmpty()
        .isString()
        .withMessage("L'entité doit être une chaîne non vide"),
    ];
  }
}

export default TypeSuccursalesValide;
