import { Router } from "express";
import { FournisseursController } from "../controller/fournisseursController.js";

const routerFournisseurs = Router();

// Récupérer tous les fournisseurs
routerFournisseurs.get("/", FournisseursController.getFournisseurs);

// Récupérer un fournisseur par ID
routerFournisseurs.get("/:id", FournisseursController.getFournisseurById);

// Récupérer les fournisseurs par entreprise
routerFournisseurs.get("/entreprise/:id_entreprise", FournisseursController.getFournisseursByEntreprise);

// Ajouter un nouveau fournisseur
routerFournisseurs.post("/", FournisseursController.createFournisseur);

// Mettre à jour les informations d'un fournisseur
routerFournisseurs.put("/:id", FournisseursController.updateFournisseur);

// Supprimer un fournisseur
routerFournisseurs.delete("/:id", FournisseursController.deleteFournisseur);

export default routerFournisseurs;
