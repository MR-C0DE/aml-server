import { Router } from "express";
import { TypeSuccursalesController } from "../controller/typeSuccursalesController.js";
import TypeSuccursalesValide from "../validation/typeSuccursalesValide.js";

const routerTypeSuccursales = Router();

// Récupérer tous les types de succursales
routerTypeSuccursales.get("/", TypeSuccursalesController.getTypeSuccursales);

// Ajouter un nouveau type de succursale
routerTypeSuccursales.post("/", TypeSuccursalesValide.createTypeSuccursale(), TypeSuccursalesController.createTypeSuccursale);

// Mettre à jour les informations d'un type de succursale
routerTypeSuccursales.put("/:id", TypeSuccursalesValide.updateTypeSuccursale() , TypeSuccursalesController.updateTypeSuccursale);

// Supprimer un type de succursale
routerTypeSuccursales.delete("/:id", TypeSuccursalesValide.id(), TypeSuccursalesController.deleteTypeSuccursale);

export default routerTypeSuccursales;
