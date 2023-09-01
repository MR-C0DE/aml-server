import { Router } from "express";
import AuthUtils from "../configuration/auth.js";
import { EntreprisesController } from "../controller/entreprisesController.js";
import EntreprisesValide from "../validation/entreprisesValide.js";

const routerEntreprises = Router();

// Récupérer toutes les entreprises
routerEntreprises.get("/", EntreprisesController.getEntreprises);

// Récupérer une entreprise par ID
routerEntreprises.get("/:id", AuthUtils.authenticateToken, EntreprisesController.getEntrepriseById);

// Récupérer les entreprises dans un pays spécifique
routerEntreprises.get("/country/:country", EntreprisesValide.otherStringByParam('country') , AuthUtils.authenticateToken, EntreprisesController.getEntreprisesInCountry);

// Récupérer les entreprises avec un statut spécifique
routerEntreprises.get("/status/:status",EntreprisesValide.otherStringByParam('status') , AuthUtils.authenticateToken, EntreprisesController.getEntreprisesWithStatus);

// Ajouter une nouvelle entreprise
routerEntreprises.post("/", EntreprisesValide.createEntreprise(), EntreprisesController.createEntreprise);

// Ajouter un nouveau compte entreprise
routerEntreprises.post("/newAccount", EntreprisesController.createAccountEntreprise);


// Mettre à jour les informations d'une entreprise
routerEntreprises.put("/:id", EntreprisesValide.id(), AuthUtils.authenticateToken, EntreprisesController.updateEntreprise);

// Supprimer une entreprise
routerEntreprises.delete("/:id", EntreprisesValide.id(), AuthUtils.authenticateToken, EntreprisesController.deleteEntreprise);

export default routerEntreprises;
