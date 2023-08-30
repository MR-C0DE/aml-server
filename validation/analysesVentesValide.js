import { body, param } from "express-validator";

class AnalysesVentesValide {
  static id() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'analyse de vente doit être numérique et ne doit pas être vide"),
    ];
  } 

  static createAnalysesVente() {
    return [
      body("id_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du produit doit être numérique et ne doit pas être vide"),
      body("mois_annee")
        .notEmpty()
        .isString()
        .withMessage("Le mois et l'année doivent être spécifiés au format 'AAAA-MM' et ne doivent pas être vides"),
      body("ventes_totales")
        .notEmpty()
        .isNumeric()
        .withMessage("Le nombre de ventes totales doit être numérique et ne doit pas être vide"),
      body("stock_initial")
        .notEmpty()
        .isNumeric()
        .withMessage("Le stock initial doit être numérique et ne doit pas être vide"),
      body("stock_final")
        .notEmpty()
        .isNumeric()
        .withMessage("Le stock final doit être numérique et ne doit pas être vide"),
    ];
  }

  static updateAnalysesVente() {
    return [
      param("id")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID de l'analyse de vente doit être numérique et ne doit pas être vide"),
      body("id_produit")
        .notEmpty()
        .isNumeric()
        .withMessage("L'ID du produit doit être numérique et ne doit pas être vide"),
      body("mois_annee")
        .notEmpty()
        .isString()
        .withMessage("Le mois et l'année doivent être spécifiés au format 'AAAA-MM' et ne doivent pas être vides"),
      body("ventes_totales")
        .notEmpty()
        .isNumeric()
        .withMessage("Le nombre de ventes totales doit être numérique et ne doit pas être vide"),
      body("stock_initial")
        .notEmpty()
        .isNumeric()
        .withMessage("Le stock initial doit être numérique et ne doit pas être vide"),
      body("stock_final")
        .notEmpty()
        .isNumeric()
        .withMessage("Le stock final doit être numérique et ne doit pas être vide"),
    ];
  }
}

export default AnalysesVentesValide;
