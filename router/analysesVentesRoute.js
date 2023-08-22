import { Router } from "express";
import { AnalysesVentesController } from "../controller/analysesVentesController.js";
import AnalysesVentesValide from "../validation/analysesVentesValide.js";

const routerAnalysesVentes = Router();

// Récupérer toutes les analyses de ventes
routerAnalysesVentes.get("/", AnalysesVentesController.getAnalysesVentes);

// Récupérer une analyse de vente par ID
routerAnalysesVentes.get("/:id", AnalysesVentesValide.id(), AnalysesVentesController.getAnalysesVenteById);

// Ajouter une nouvelle analyse de vente
routerAnalysesVentes.post("/", AnalysesVentesController.createAnalysesVente);

// Mettre à jour les informations d'une analyse de vente
routerAnalysesVentes.put("/:id", AnalysesVentesValide.updateAnalysesVente(), AnalysesVentesController.updateAnalysesVente);

// Supprimer une analyse de vente
routerAnalysesVentes.delete("/:id", AnalysesVentesValide.id(), AnalysesVentesController.deleteAnalysesVente);

// Récupérer les ventes pour un mois donné
routerAnalysesVentes.get("/ventes/:monthYear", AnalysesVentesController.getVentesByMonth);

export default routerAnalysesVentes;
