import { body, param } from "express-validator";

class ClientsValide {
  static id(str='id') {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du client doit être numérique et ne doit pas être vide"),
    ];
  }

  static createClient() {
    return [
      body("nom").notEmpty().withMessage("Le nom ne doit pas être vide"),
      body("prenom").notEmpty().withMessage("Le prénom ne doit pas être vide"),
      body("adresse").notEmpty().withMessage("L'adresse ne doit pas être vide"),
      body("telephone")
        .notEmpty()
        .withMessage("Le numéro de téléphone ne doit pas être vide"),
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage("L'email doit être une adresse email valide et ne doit pas être vide"),
      body("id_entreprise")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'entreprise doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateClient() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du client doit être numérique et ne doit pas être vide"),
      body("nom").notEmpty().withMessage("Le nom ne doit pas être vide"),
      body("prenom").notEmpty().withMessage("Le prénom ne doit pas être vide"),
      body("adresse").notEmpty().withMessage("L'adresse ne doit pas être vide"),
      body("telephone")
        .notEmpty()
        .withMessage("Le numéro de téléphone ne doit pas être vide"),
      body("email")
        .notEmpty()
        .isEmail()
        .withMessage("L'email doit être une adresse email valide et ne doit pas être vide"),
    ];
  }
}

export default ClientsValide;
