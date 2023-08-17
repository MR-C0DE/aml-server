import { Router } from "express";
import AuthUtils from "../configuration/auth.js";
import { EntreprisesController } from "../controller/entreprisesController.js";

const routerEntreprises = Router();

// Récupérer toutes les entreprises
routerEntreprises.get("/", AuthUtils.authenticateToken, EntreprisesController.getEntreprises);

// Récupérer une entreprise par ID
routerEntreprises.get("/:id", AuthUtils.authenticateToken, EntreprisesController.getEntrepriseById);

// Récupérer les entreprises dans un pays spécifique
routerEntreprises.get("/country/:country", AuthUtils.authenticateToken, EntreprisesController.getEntreprisesInCountry);

// Récupérer les entreprises avec un statut spécifique
routerEntreprises.get("/status/:status", AuthUtils.authenticateToken, EntreprisesController.getEntreprisesWithStatus);

// Ajouter une nouvelle entreprise
routerEntreprises.post("/", EntreprisesController.createEntreprise);

// Mettre à jour les informations d'une entreprise
routerEntreprises.put("/:id", AuthUtils.authenticateToken, EntreprisesController.updateEntreprise);

// Supprimer une entreprise
routerEntreprises.delete("/:id", AuthUtils.authenticateToken, EntreprisesController.deleteEntreprise);

export default routerEntreprises;
