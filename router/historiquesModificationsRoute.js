import { Router } from "express";
import { HistoriqueModificationsController } from "../controller/historiqueModificationsController.js";

const routerHistoriqueModifications = Router();

// Récupérer tous les historiques de modifications
routerHistoriqueModifications.get("/", HistoriqueModificationsController.getHistoriqueModifications);

// Récupérer un historique de modification par ID
routerHistoriqueModifications.get("/:id", HistoriqueModificationsController.getHistoriqueModificationById);

// Récupérer l'historique de modification d'un utilisateur
routerHistoriqueModifications.get("/user/:userId", HistoriqueModificationsController.getHistoriqueModificationByUser);

// Ajouter un nouvel historique de modification
routerHistoriqueModifications.post("/", HistoriqueModificationsController.createHistoriqueModification);

// Mettre à jour un historique de modification
routerHistoriqueModifications.put("/:id", HistoriqueModificationsController.updateHistoriqueModification);

// Supprimer un historique de modification
routerHistoriqueModifications.delete("/:id", HistoriqueModificationsController.deleteHistoriqueModification);

export default routerHistoriqueModifications;
