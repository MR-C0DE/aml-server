import { Router } from "express";
import { HistoriquePrixController } from "../controller/historiquePrixController.js";

const routerHistoriquePrix = Router();

// Récupérer tout l'historique des prix
routerHistoriquePrix.get("/", HistoriquePrixController.getHistoriquePrix);

// Récupérer l'historique des prix pour un produit donné
routerHistoriquePrix.get("/product/:productId", HistoriquePrixController.getProductPriceHistory);

// Récupérer l'historique des prix par ID
routerHistoriquePrix.get("/:id", HistoriquePrixController.getHistoriquePrixById);

// Ajouter un nouvel historique de prix
routerHistoriquePrix.post("/", HistoriquePrixController.createHistoriquePrix);

// Mettre à jour l'historique de prix par ID
routerHistoriquePrix.put("/:id", HistoriquePrixController.updateHistoriquePrix);

// Supprimer l'historique de prix par ID
routerHistoriquePrix.delete("/:id", HistoriquePrixController.deleteHistoriquePrix);

export default routerHistoriquePrix;
