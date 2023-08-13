import { Router } from "express";
import { CommandesFournisseursController } from "../controller/commandesFournisseursController.js";

const routerCommandesFournisseurs = Router();

// Récupérer toutes les commandes fournisseurs
routerCommandesFournisseurs.get("/", CommandesFournisseursController.getCommandesFournisseurs);

// Récupérer une commande fournisseur par ID
routerCommandesFournisseurs.get("/:id", CommandesFournisseursController.getCommandeFournisseurById);

// Créer une nouvelle commande fournisseur
routerCommandesFournisseurs.post("/", CommandesFournisseursController.createCommandeFournisseur);

// Mettre à jour les informations d'une commande fournisseur
routerCommandesFournisseurs.put("/:id", CommandesFournisseursController.updateCommandeFournisseur);

// Supprimer une commande fournisseur
routerCommandesFournisseurs.delete("/:id", CommandesFournisseursController.deleteCommandeFournisseur);

// Récupérer les commandes fournisseurs pour un achat spécifique
routerCommandesFournisseurs.get("/achat/:achatId", CommandesFournisseursController.getCommandesForAchat);

export default routerCommandesFournisseurs;
