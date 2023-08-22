import { Router } from "express";
import { HistoriqueModificationsController } from "../controller/historiqueModificationsController.js";
import HistoriqueModificationsValide from "../validation/historiquesModificationsValide.js";

const routerHistoriqueModifications = Router();

// Récupérer tous les historiques de modifications
routerHistoriqueModifications.get("/", HistoriqueModificationsController.getHistoriqueModifications);

// Récupérer un historique de modification par ID
routerHistoriqueModifications.get("/:id",HistoriqueModificationsValide.id("id"), HistoriqueModificationsController.getHistoriqueModificationById);

// Récupérer l'historique de modification d'un utilisateur
routerHistoriqueModifications.get("/user/:userId",HistoriqueModificationsValide.id("userId"), HistoriqueModificationsController.getHistoriqueModificationByUser);

// Ajouter un nouvel historique de modification
routerHistoriqueModifications.post("/",HistoriqueModificationsValide.createHistoriqueModification(), HistoriqueModificationsController.createHistoriqueModification);

// Mettre à jour un historique de modification
routerHistoriqueModifications.put("/:id",HistoriqueModificationsValide.updateHistoriqueModification() , HistoriqueModificationsController.updateHistoriqueModification);

// Supprimer un historique de modification
routerHistoriqueModifications.delete("/:id", HistoriqueModificationsValide.id('id'), HistoriqueModificationsController.deleteHistoriqueModification);

export default routerHistoriqueModifications;
