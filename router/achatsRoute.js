import { Router } from "express";
import { AchatsController } from "../controller/achatsController.js";
import AchatsValide from "../validation/achatsValide.js";

const routerAchats = Router();

// Récupérer tous les achats
routerAchats.get("/", AchatsController.getAchats);

// Récupérer un achat par ID
routerAchats.get("/:id", AchatsValide.id(), AchatsController.getAchatById);

// Récupérer les achats d'un fournisseur par ID
routerAchats.get("/fournisseur/:fournisseurId",AchatsValide.id(), AchatsController.getAchatsByFournisseur);

// Ajouter un nouvel achat
routerAchats.post("/", AchatsValide.createAchat(), AchatsController.createAchat);

// Mettre à jour les informations d'un achat
routerAchats.put("/:id",AchatsValide.updateAchat(), AchatsController.updateAchat);

// Supprimer un achat
routerAchats.delete("/:id",AchatsValide.id(), AchatsController.deleteAchat);

export default routerAchats;
