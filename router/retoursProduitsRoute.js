import { Router } from "express";
import { RetoursProduitsController } from "../controller/retoursProduitsController.js";
import RetoursProduitsValide from "../validation/retoursProduitsValide.js";
const routerRetoursProduits = Router();

// Récupérer tous les retours produits
routerRetoursProduits.get("/", RetoursProduitsController.getRetoursProduits);

// Récupérer un retour produit par ID
routerRetoursProduits.get("/:id", RetoursProduitsValide.id("id"), RetoursProduitsController.getRetourProduitById);

// Ajouter un nouveau retour produit
routerRetoursProduits.post("/",RetoursProduitsValide.createRetourProduit(), RetoursProduitsController.createRetourProduit);

// Mettre à jour les informations d'un retour produit
routerRetoursProduits.put("/:id",RetoursProduitsValide.updateRetourProduit(), RetoursProduitsController.updateRetourProduit);

// Supprimer un retour produit
routerRetoursProduits.delete("/:id", RetoursProduitsValide.id("id") ,RetoursProduitsController.deleteRetourProduit);

// Récupérer les retours produits par ID de vente
routerRetoursProduits.get("/vente/:venteId", RetoursProduitsValide.id("venteId"), RetoursProduitsController.getRetoursProduitsByVente);

export default routerRetoursProduits;
