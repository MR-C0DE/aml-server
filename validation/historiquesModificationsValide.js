import { body, param } from "express-validator";

class HistoriqueModificationsValide {
  static id(str) {
    return [
      param(str)
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID doit être numérique et ne doit pas être vide"),
    ];
  }

  static createHistoriqueModification() {
    return [
      body("table_modifiee")
        .notEmpty()
        .isString()
        .withMessage("La table modifiée ne doit pas être vide"),
      body("id_enregistrement")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'enregistrement doit être numérique et ne doit pas être vide"),
      body("champ_modifie")
        .notEmpty()
        .isString()
        .withMessage("Le champ modifié ne doit pas être vide"),
      body("ancienne_valeur")
        .notEmpty()
        .isString()
        .withMessage("L'ancienne valeur ne doit pas être vide"),
      body("nouvelle_valeur")
        .notEmpty()
        .isString()
        .withMessage("La nouvelle valeur ne doit pas être vide"),
      body("date_modification")
        .notEmpty()
        .isISO8601()
        .withMessage("La date de modification doit être une date valide au format ISO8601"),
      body("id_utilisateur")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateHistoriqueModification() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID doit être numérique et ne doit pas être vide"),
      body("table_modifiee")
        .notEmpty()
        .isString()
        .withMessage("La table modifiée ne doit pas être vide"),
        body("id_enregistrement")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'enregistrement doit être numérique et ne doit pas être vide"),
      body("champ_modifie")
        .notEmpty()
        .isString()
        .withMessage("Le champ modifié ne doit pas être vide"),
      body("ancienne_valeur")
        .notEmpty()
        .isString()
        .withMessage("L'ancienne valeur ne doit pas être vide"),
      body("nouvelle_valeur")
        .notEmpty()
        .isString()
        .withMessage("La nouvelle valeur ne doit pas être vide"),
      body("date_modification")
        .notEmpty()
        .isISO8601()
        .withMessage("La date de modification doit être une date valide au format ISO8601"),
      body("id_utilisateur")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'utilisateur doit être numérique et ne doit pas être vide"),

      // ... autres validations pour la mise à jour
    ];
  }

  // Ajoutez d'autres méthodes de validation au besoin, par exemple pour les autres actions.

}

export default HistoriqueModificationsValide;
