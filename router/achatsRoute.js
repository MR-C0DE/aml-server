import { Router } from "express";
import AuthUtils from "../configuration/auth.js";
import { AchatsController } from "../controller/achatsController.js";

const routerAchats = Router();

// Récupérer tous les achats
routerAchats.get("/", AuthUtils.authenticateToken, AchatsController.getAchats);

// Récupérer un achat par ID
routerAchats.get("/:id", AchatsController.getAchatById);

// Récupérer les achats d'un fournisseur par ID
routerAchats.get("/fournisseur/:fournisseurId", AchatsController.getAchatsByFournisseur);

// Ajouter un nouvel achat
routerAchats.post("/", AchatsController.createAchat);

// Mettre à jour les informations d'un achat
routerAchats.put("/:id", AchatsController.updateAchat);

// Supprimer un achat
routerAchats.delete("/:id", AchatsController.deleteAchat);

export default routerAchats;
