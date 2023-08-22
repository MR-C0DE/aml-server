import {
    Router
} from "express";
import {
    HistoriquePrixController
} from "../controller/historiquePrixController.js";
import HistoriquePrixValide from "../validation/historiquePrixValide.js";

const routerHistoriquePrix = Router();

// Récupérer tout l'historique des prix
routerHistoriquePrix.get("/", HistoriquePrixController.getHistoriquePrix);

// Récupérer l'historique des prix pour un produit donné
routerHistoriquePrix.get("/product/:productId", HistoriquePrixValide.id("productId") , HistoriquePrixController.getProductPriceHistory);

// Récupérer l'historique des prix par ID
routerHistoriquePrix.get("/:id", HistoriquePrixValide.id("id"), HistoriquePrixController.getHistoriquePrixById);

// Ajouter un nouvel historique de prix
routerHistoriquePrix.post("/", HistoriquePrixController.createHistoriquePrix);

// Mettre à jour l'historique de prix par ID
routerHistoriquePrix.put("/:id",HistoriquePrixValide.updateHistoriquePrix(), HistoriquePrixController.updateHistoriquePrix);

// Supprimer l'historique de prix par ID
routerHistoriquePrix.delete("/:id", HistoriquePrixValide.id("id"), HistoriquePrixController.deleteHistoriquePrix);

export default routerHistoriquePrix;