import { Router } from "express";
import { RetoursProduitsController } from "../controller/retoursProduitsController.js";

const routerRetoursProduits = Router();

// Récupérer tous les retours produits
routerRetoursProduits.get("/", RetoursProduitsController.getRetoursProduits);

// Récupérer un retour produit par ID
routerRetoursProduits.get("/:id", RetoursProduitsController.getRetourProduitById);

// Ajouter un nouveau retour produit
routerRetoursProduits.post("/", RetoursProduitsController.createRetourProduit);

// Mettre à jour les informations d'un retour produit
routerRetoursProduits.put("/:id", RetoursProduitsController.updateRetourProduit);

// Supprimer un retour produit
routerRetoursProduits.delete("/:id", RetoursProduitsController.deleteRetourProduit);

// Récupérer les retours produits par ID de vente
routerRetoursProduits.get("/vente/:venteId", RetoursProduitsController.getRetoursProduitsByVente);

export default routerRetoursProduits;
