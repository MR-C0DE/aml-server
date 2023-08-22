import { Router } from "express";
import { ProduitsController } from "../controller/produitsController.js"; // Assurez-vous que le chemin du contrôleur est correct
import ProduitsValide from "../validation/produitsValide.js";
const routerProduits = Router();

// Récupérer tous les produits
routerProduits.get("/", ProduitsController.getProduits);

// Récupérer un produit par ID
routerProduits.get("/:id",ProduitsValide.id("id"), ProduitsController.getProduitById);

// Ajouter un nouveau produit
routerProduits.post("/", ProduitsValide.createProduit(), ProduitsController.createProduit);

// Mettre à jour les informations d'un produit
routerProduits.put("/:id", ProduitsValide.updateProduit() , ProduitsController.updateProduit);

// Supprimer un produit
routerProduits.delete("/:id", ProduitsValide.id("id"), ProduitsController.deleteProduit);

// Récupérer les produits par catégorie
routerProduits.get("/categorie/:categorieId", ProduitsValide.id("categorieId"), ProduitsController.getProduitsByCategorie);

// Récupérer les produits par succursale
routerProduits.get("/succursale/:succursaleId", ProduitsValide.id("succursaleId"), ProduitsController.getProduitsBySuccursale);

export default routerProduits;
