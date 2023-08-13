import { Router } from "express";
import { UnitesMonetairesController } from "../controller/unitesMonetairesController.js";

const routerUnitesMonetaires = Router();

// Récupérer toutes les unités monétaires
routerUnitesMonetaires.get("/", UnitesMonetairesController.getUnitesMonetaires);

// Récupérer une unité monétaire par ID
routerUnitesMonetaires.get("/:id", UnitesMonetairesController.getUniteMonetaireById);

// Récupérer les unités monétaires pour une entreprise spécifique
routerUnitesMonetaires.get("/enterprise/:enterpriseId", UnitesMonetairesController.getUnitesMonetairesForEnterprise);

// Ajouter une nouvelle unité monétaire
routerUnitesMonetaires.post("/", UnitesMonetairesController.createUniteMonetaire);

// Mettre à jour les informations d'une unité monétaire
routerUnitesMonetaires.put("/:id", UnitesMonetairesController.updateUniteMonetaire);

// Supprimer une unité monétaire
routerUnitesMonetaires.delete("/:id", UnitesMonetairesController.deleteUniteMonetaire);

export default routerUnitesMonetaires;
