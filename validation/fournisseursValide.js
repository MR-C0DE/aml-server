import { body, param } from "express-validator";

class FournisseursValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du fournisseur doit être numérique et ne doit pas être vide"),
    ];
  }

  static createFournisseur() {
    return [
      body("nom")
        .notEmpty()
        .withMessage("Le nom du fournisseur ne doit pas être vide"),
      body("adresse")
        .notEmpty()
        .withMessage("L'adresse du fournisseur ne doit pas être vide"),
      body("telephone")
        .notEmpty()
        .withMessage("Le numéro de téléphone du fournisseur ne doit pas être vide"),
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage("L'adresse email du fournisseur doit être valide et ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateFournisseur() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du fournisseur doit être numérique et ne doit pas être vide"),
      body("nom")
        .notEmpty()
        .withMessage("Le nom du fournisseur ne doit pas être vide"),
      body("adresse")
        .notEmpty()
        .withMessage("L'adresse du fournisseur ne doit pas être vide"),
      body("telephone")
        .notEmpty()
        .withMessage("Le numéro de téléphone du fournisseur ne doit pas être vide"),
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage("L'adresse email du fournisseur doit être valide et ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default FournisseursValide;
