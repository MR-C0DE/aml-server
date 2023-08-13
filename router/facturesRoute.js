import { Router } from "express";
import { FacturesController } from "../controller/facturesController.js"; // Assurez-vous de fournir le chemin correct vers votre contrôleur FacturesController

const routerFactures = Router();

// Récupérer toutes les factures
routerFactures.get("/", FacturesController.getFactures);

// Récupérer une facture par ID
routerFactures.get("/:id", FacturesController.getFactureById);

// Récupérer les factures pour un client donné
routerFactures.get("/client/:clientId", FacturesController.getFacturesForClient);

// Ajouter une nouvelle facture
routerFactures.post("/", FacturesController.createFacture);

// Mettre à jour les informations d'une facture
routerFactures.put("/:id", FacturesController.updateFacture);

// Supprimer une facture
routerFactures.delete("/:id", FacturesController.deleteFacture);

export default routerFactures;
