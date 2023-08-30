import { body, param } from "express-validator";

class EntreprisesValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de l'entreprise doit être numérique et ne doit pas être vide"
        ),
    ];
  }

  static createEntreprise() {
    return [
      body("nom")
        .notEmpty()
        .withMessage("Le nom de l'entreprise ne doit pas être vide"),
      body("pays").notEmpty().withMessage("Le pays ne doit pas être vide"),
      body("ville").notEmpty().withMessage("La ville ne doit pas être vide"),
      body("adresse").notEmpty().withMessage("L'adresse ne doit pas être vide"),
      body("telephone")
        .notEmpty()
        .withMessage("Le numéro de téléphone ne doit pas être vide"),
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage("L'email doit être valide"),
      body("site_web")
        .notEmpty()
        .isURL()
        .withMessage("Le site web doit être une URL valide"),
    ];
  }

  static updateEntreprise() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage(
          "L'ID de l'entreprise doit être numérique et ne doit pas être vide"
        ),
      body("nom")
        .notEmpty()
        .withMessage("Le nom de l'entreprise ne doit pas être vide"),
      body("pays").notEmpty().withMessage("Le pays ne doit pas être vide"),
      body("ville").notEmpty().withMessage("La ville ne doit pas être vide"),
      body("adresse").notEmpty().withMessage("L'adresse ne doit pas être vide"),
      body("telephone")
        .notEmpty()
        .withMessage("Le numéro de téléphone ne doit pas être vide"),
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage("L'email doit être valide"),
      body("site_web")
        .notEmpty()
        .isURL()
        .withMessage("Le site web doit être une URL valide"),
      body("matricule")
        .notEmpty()
        .withMessage("Le matricule ne doit pas être vide"),
      body("statut").notEmpty().withMessage("Le statut ne doit pas être vide"),
    ];
  }

  static otherStringByParam(str) {
    return [
      param(str)
        .notEmpty()
        .isString()
        .withMessage(
          "Le '"+str+"' de l'entreprise doit être une  et ne doit pas être vide"
        ),
    ];
  }
}

export default EntreprisesValide;
