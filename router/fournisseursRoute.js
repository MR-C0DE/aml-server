import { Router } from "express";
import { FournisseursController } from "../controller/fournisseursController.js";
import FournisseursValide from "../validation/fournisseursValide.js";

const routerFournisseurs = Router();

// Récupérer tous les fournisseurs
routerFournisseurs.get("/", FournisseursController.getFournisseurs);

// Récupérer un fournisseur par ID
routerFournisseurs.get("/:id", FournisseursValide.id("id"), FournisseursController.getFournisseurById);

// Récupérer les fournisseurs par entreprise
routerFournisseurs.get("/entreprise/:id_entreprise", FournisseursValide.id("id_entreprise"), FournisseursController.getFournisseursByEntreprise);

// Ajouter un nouveau fournisseur
routerFournisseurs.post("/", FournisseursValide.createFournisseur(), FournisseursController.createFournisseur);

// Mettre à jour les informations d'un fournisseur
routerFournisseurs.put("/:id",FournisseursValide.updateFournisseur(), FournisseursController.updateFournisseur);

// Supprimer un fournisseur
routerFournisseurs.delete("/:id", FournisseursValide.id("id"), FournisseursController.deleteFournisseur);

export default routerFournisseurs;
