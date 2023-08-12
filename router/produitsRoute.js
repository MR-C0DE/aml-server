import { Router } from "express";
import { ProduitsController } from "../controller/produitsController.js";

const router = Router();

// Récupérer tous les produits
router.get("/", ProduitsController.getProduits);

// Récupérer un produit par son ID
router.get("/:id", ProduitsController.getProduitById);

// Récupérer un produit par son code produit
router.get("/code/:code_produit", ProduitsController.getProduitByCodeProduit);

// Récupérer un produit par son id type
router.get("/type/:id_type", ProduitsController.getProduitByIdType);

// Récupérer un produit par son id succursale
router.get("/succursale/:id_succursale", ProduitsController.getProduitByIdSuccursale);

// Créer un nouveau produit
router.post("/", ProduitsController.createProduit);

// Mettre à jour un produit existant
router.put("/:id", ProduitsController.updateProduit);

// Supprimer un produit existant
router.delete("/:id", ProduitsController.deleteProduit);

export default router;
