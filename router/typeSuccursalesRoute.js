import { Router } from "express";
import { TypeSuccursalesController } from "../controller/typeSuccursalesController.js";

const routerTypeSuccursales = Router();

// Récupérer tous les types de succursales
routerTypeSuccursales.get("/", TypeSuccursalesController.getTypeSuccursales);

// Ajouter un nouveau type de succursale
routerTypeSuccursales.post("/", TypeSuccursalesController.createTypeSuccursale);

// Mettre à jour les informations d'un type de succursale
routerTypeSuccursales.put("/:id", TypeSuccursalesController.updateTypeSuccursale);

// Supprimer un type de succursale
routerTypeSuccursales.delete("/:id", TypeSuccursalesController.deleteTypeSuccursale);

export default routerTypeSuccursales;
