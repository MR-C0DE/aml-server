import { Router } from "express";
import { JournalisationsOperationsController } from "../controller/journalisationsOperationsController.js";
import JournalisationsOperationsValide from "../validation/journalisationsOperationsValide.js";

const routerJournalisationsOperations = Router();

// Récupérer toutes les opérations de journalisation
routerJournalisationsOperations.get("/", JournalisationsOperationsController.getJournalisationsOperations);

// Récupérer une opération de journalisation par ID
routerJournalisationsOperations.get("/:id",JournalisationsOperationsValide.id() , JournalisationsOperationsController.getJournalisationOperationById);

// Ajouter une nouvelle opération de journalisation
routerJournalisationsOperations.post("/",JournalisationsOperationsValide.createJournalisationOperation() , JournalisationsOperationsController.createJournalisationOperation);

// Mettre à jour les informations d'une opération de journalisation
routerJournalisationsOperations.put("/:id", JournalisationsOperationsValide.updateJournalisationOperation(), JournalisationsOperationsController.updateJournalisationOperation);

// Supprimer une opération de journalisation
routerJournalisationsOperations.delete("/:id",JournalisationsOperationsValide.id(), JournalisationsOperationsController.deleteJournalisationOperation);

export default routerJournalisationsOperations;
