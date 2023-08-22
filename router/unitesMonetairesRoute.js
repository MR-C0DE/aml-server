import { Router } from "express";
import { UnitesMonetairesController } from "../controller/unitesMonetairesController.js";
import UnitesMonetairesValide from "../validation/unitesMonetairesValide.js";

const routerUnitesMonetaires = Router();

// Récupérer toutes les unités monétaires
routerUnitesMonetaires.get("/", UnitesMonetairesController.getUnitesMonetaires);

// Récupérer une unité monétaire par ID
routerUnitesMonetaires.get("/:id", UnitesMonetairesValide.id("id"), UnitesMonetairesController.getUniteMonetaireById);

// Récupérer les unités monétaires pour une entreprise spécifique
routerUnitesMonetaires.get("/enterprise/:enterpriseId", UnitesMonetairesValide.id("enterpriseId"), UnitesMonetairesController.getUnitesMonetairesForEnterprise);

// Ajouter une nouvelle unité monétaire
routerUnitesMonetaires.post("/", UnitesMonetairesValide.createUniteMonetaire(), UnitesMonetairesController.createUniteMonetaire);

// Mettre à jour les informations d'une unité monétaire
routerUnitesMonetaires.put("/:id", UnitesMonetairesValide.updateUniteMonetaire(), UnitesMonetairesController.updateUniteMonetaire);

// Supprimer une unité monétaire
routerUnitesMonetaires.delete("/:id", UnitesMonetairesValide.id("id"), UnitesMonetairesController.deleteUniteMonetaire);

export default routerUnitesMonetaires;
