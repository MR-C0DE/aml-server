import { Router } from "express";
import { JournalisationsOperationsController } from "../controller/journalisationsOperationsController.js";

const routerJournalisationsOperations = Router();

// Récupérer toutes les opérations de journalisation
routerJournalisationsOperations.get("/", JournalisationsOperationsController.getJournalisationsOperations);

// Récupérer une opération de journalisation par ID
routerJournalisationsOperations.get("/:id", JournalisationsOperationsController.getJournalisationOperationById);

// Ajouter une nouvelle opération de journalisation
routerJournalisationsOperations.post("/", JournalisationsOperationsController.createJournalisationOperation);

// Mettre à jour les informations d'une opération de journalisation
routerJournalisationsOperations.put("/:id", JournalisationsOperationsController.updateJournalisationOperation);

// Supprimer une opération de journalisation
routerJournalisationsOperations.delete("/:id", JournalisationsOperationsController.deleteJournalisationOperation);

export default routerJournalisationsOperations;
