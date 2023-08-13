import { Router } from "express";
import { EntreprisesController } from "../controller/entreprisesController.js";

const routerEntreprises = Router();

// Récupérer toutes les entreprises
routerEntreprises.get("/", EntreprisesController.getEntreprises);

// Récupérer une entreprise par ID
routerEntreprises.get("/:id", EntreprisesController.getEntrepriseById);

// Récupérer les entreprises dans un pays spécifique
routerEntreprises.get("/country/:country", EntreprisesController.getEntreprisesInCountry);

// Récupérer les entreprises avec un statut spécifique
routerEntreprises.get("/status/:status", EntreprisesController.getEntreprisesWithStatus);

// Ajouter une nouvelle entreprise
routerEntreprises.post("/", EntreprisesController.createEntreprise);

// Mettre à jour les informations d'une entreprise
routerEntreprises.put("/:id", EntreprisesController.updateEntreprise);

// Supprimer une entreprise
routerEntreprises.delete("/:id", EntreprisesController.deleteEntreprise);

export default routerEntreprises;
