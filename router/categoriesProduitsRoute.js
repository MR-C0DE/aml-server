import { Router } from "express";
import { CategoriesProduitsController } from "../controller/categoriesProduitsController.js";
import CategoriesProduitsValide from "../validation/categoriesProduitsValide.js";

const routerCategoriesProduits = Router();

// Récupérer toutes les catégories de produits
routerCategoriesProduits.get("/", CategoriesProduitsController.getCategoriesProduits);

// Récupérer une catégorie de produit par ID
routerCategoriesProduits.get("/:id",CategoriesProduitsValide.id(), CategoriesProduitsController.getCategorieProduitById);

// Ajouter une nouvelle catégorie de produit
routerCategoriesProduits.post("/", CategoriesProduitsValide.createCategorieProduit(), CategoriesProduitsController.createCategorieProduit);

// Mettre à jour les informations d'une catégorie de produit
routerCategoriesProduits.put("/:id",CategoriesProduitsValide.id(), CategoriesProduitsController.updateCategorieProduit);

// Supprimer une catégorie de produit
routerCategoriesProduits.delete("/:id",CategoriesProduitsValide.id(), CategoriesProduitsController.deleteCategorieProduit);

// Récupérer les produits dans une catégorie spécifique
routerCategoriesProduits.get("/:categorieId/produits", CategoriesProduitsController.getProduitsInCategorie);

export default routerCategoriesProduits;
