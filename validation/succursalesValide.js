import { body, param } from "express-validator";

class SuccursalesValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de la succursale doit être numérique et ne doit pas être vide"
        ),
    ];
  }

  static createSuccursale() {
    return [
      body("nom")
        .notEmpty()
        .withMessage("Le nom de la succursale ne doit pas être vide"),
      body("adresse")
        .notEmpty()
        .withMessage("L'adresse de la succursale ne doit pas être vide"),
      body("ville")
        .notEmpty()
        .withMessage("La ville de la succursale ne doit pas être vide"),
      body("code_emplacement")
        .notEmpty()
        .withMessage(
          "Le code d'emplacement de la succursale ne doit pas être vide"
        ),
      body("pays")
        .notEmpty()
        .withMessage("Le pays de la succursale ne doit pas être vide"),
      body("telephone")
        .notEmpty()
        .withMessage(
          "Le numéro de téléphone de la succursale ne doit pas être vide"
        ),
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage(
          "L'email de la succursale doit être une adresse email valide et ne doit pas être vide"
        ),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de l'entreprise doit être numérique et ne doit pas être vide"
        ),
      body("type_succursale")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "Le type de la succursale doit être numérique et ne doit pas être vide"
        ),
    ];
  }

  static updateSuccursale() {
    return [
      body("id")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de la succursale doit être numérique et ne doit pas être vide"
        ),
      body("nom")
        .notEmpty()
        .withMessage("Le nom de la succursale ne doit pas être vide"),
      body("adresse")
        .notEmpty()
        .withMessage("L'adresse de la succursale ne doit pas être vide"),
      body("ville")
        .notEmpty()
        .withMessage("La ville de la succursale ne doit pas être vide"),
      body("code_emplacement")
        .notEmpty()
        .withMessage(
          "Le code d'emplacement de la succursale ne doit pas être vide"
        ),
      body("pays")
        .notEmpty()
        .withMessage("Le pays de la succursale ne doit pas être vide"),
      body("telephone")
        .notEmpty()
        .withMessage(
          "Le numéro de téléphone de la succursale ne doit pas être vide"
        ),
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage(
          "L'email de la succursale doit être une adresse email valide et ne doit pas être vide"
        ),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de l'entreprise doit être numérique et ne doit pas être vide"
        ),
      body("type_succursale")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "Le type de la succursale doit être numérique et ne doit pas être vide"
        ),
    ];
  }
}

export default SuccursalesValide;
