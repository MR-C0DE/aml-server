import { Router } from "express";
import { FacturesController } from "../controller/facturesController.js"; // Assurez-vous de fournir le chemin correct vers votre contrôleur FacturesController
import FacturesValide from "../validation/facturesValide.js";

const routerFactures = Router();

// Récupérer toutes les factures
routerFactures.get("/", FacturesController.getFactures);

// Récupérer une facture par ID
routerFactures.get("/:id", FacturesValide.id(), FacturesController.getFactureById);

// Récupérer les factures pour un client donné
routerFactures.get("/client/:clientId", FacturesValide.id('clientId'), FacturesController.getFacturesForClient);

// Ajouter une nouvelle facture
routerFactures.post("/",FacturesValide.createFacture(), FacturesController.createFacture);

// Mettre à jour les informations d'une facture
routerFactures.put("/:id", FacturesValide.updateFacture(), FacturesController.updateFacture);

// Supprimer une facture
routerFactures.delete("/:id", FacturesValide.id(), FacturesController.deleteFacture);

export default routerFactures;
