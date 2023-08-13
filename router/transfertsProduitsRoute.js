import { Router } from "express";
import { TransfertsProduitsController } from "../controller/transfertsProduitsController.js";

const routerTransfertsProduits = Router();

// Récupérer tous les transferts de produits
routerTransfertsProduits.get("/", TransfertsProduitsController.getTransfertsProduits);

// Récupérer un transfert de produit par ID
routerTransfertsProduits.get("/:id", TransfertsProduitsController.getTransfertProduitById);

// Ajouter un nouveau transfert de produit
routerTransfertsProduits.post("/", TransfertsProduitsController.createTransfertProduit);

// Mettre à jour les informations d'un transfert de produit
routerTransfertsProduits.put("/:id", TransfertsProduitsController.updateTransfertProduit);

// Supprimer un transfert de produit
routerTransfertsProduits.delete("/:id", TransfertsProduitsController.deleteTransfertProduit);

// Récupérer les transferts de produits par ID de produit
routerTransfertsProduits.get("/product/:productId", TransfertsProduitsController.getTransfertsByProductId);

export default routerTransfertsProduits;
