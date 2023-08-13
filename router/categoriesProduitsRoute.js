import { Router } from "express";
import { CategoriesProduitsController } from "../controller/categoriesProduitsController.js";

const routerCategoriesProduits = Router();

// Récupérer toutes les catégories de produits
routerCategoriesProduits.get("/", CategoriesProduitsController.getCategoriesProduits);

// Récupérer une catégorie de produit par ID
routerCategoriesProduits.get("/:id", CategoriesProduitsController.getCategorieProduitById);

// Ajouter une nouvelle catégorie de produit
routerCategoriesProduits.post("/", CategoriesProduitsController.createCategorieProduit);

// Mettre à jour les informations d'une catégorie de produit
routerCategoriesProduits.put("/:id", CategoriesProduitsController.updateCategorieProduit);

// Supprimer une catégorie de produit
routerCategoriesProduits.delete("/:id", CategoriesProduitsController.deleteCategorieProduit);

// Récupérer les produits dans une catégorie spécifique
routerCategoriesProduits.get("/:categorieId/produits", CategoriesProduitsController.getProduitsInCategorie);

export default routerCategoriesProduits;
