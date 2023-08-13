import { Router } from "express";
import { ProduitsController } from "../controller/produitsController.js"; // Assurez-vous que le chemin du contrôleur est correct

const routerProduits = Router();

// Récupérer tous les produits
routerProduits.get("/", ProduitsController.getProduits);

// Récupérer un produit par ID
routerProduits.get("/:id", ProduitsController.getProduitById);

// Ajouter un nouveau produit
routerProduits.post("/", ProduitsController.createProduit);

// Mettre à jour les informations d'un produit
routerProduits.put("/:id", ProduitsController.updateProduit);

// Supprimer un produit
routerProduits.delete("/:id", ProduitsController.deleteProduit);

// Récupérer les produits par catégorie
routerProduits.get("/categorie/:categorieId", ProduitsController.getProduitsByCategorie);

// Récupérer les produits par succursale
routerProduits.get("/succursale/:succursaleId", ProduitsController.getProduitsBySuccursale);

export default routerProduits;
