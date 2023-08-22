import { body, param } from "express-validator";

class UtilisateursValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique et ne doit pas être vide"),
    ];
  }

  static createUtilisateur() {
    return [
      body("password")
        .notEmpty()
        .withMessage("Le mot de passe ne doit pas être vide"),
      body("statut")
        .notEmpty()
        .isString()
        .withMessage("Le statut doit être une chaîne non vide"),
      body("id_employe")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'employé doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateUtilisateur() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique et ne doit pas être vide"),
      body("password")
        .optional() // Le mot de passe est facultatif lors de la mise à jour
        .notEmpty()
        .withMessage("Le mot de passe ne doit pas être vide"),
      body("statut")
        .notEmpty()
        .isString()
        .withMessage("Le statut doit être une chaîne non vide"),
      body("id_employe")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'employé doit être numérique et ne doit pas être vide"),
    ];
  }

  static utilisateurByMatricule() {
    return [
      param("matricule")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default UtilisateursValide;
