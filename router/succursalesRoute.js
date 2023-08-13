import { Router } from "express";
import { SuccursalesController } from "../controller/succursalesController.js";

const routerSuccursales = Router();

// Récupérer toutes les succursales
routerSuccursales.get("/", SuccursalesController.getSuccursales);

// Récupérer une succursale par ID
routerSuccursales.get("/:id", SuccursalesController.getSuccursaleById);

// Ajouter une nouvelle succursale
routerSuccursales.post("/", SuccursalesController.createSuccursale);

// Mettre à jour les informations d'une succursale
routerSuccursales.put("/:id", SuccursalesController.updateSuccursale);

// Supprimer une succursale
routerSuccursales.delete("/:id", SuccursalesController.deleteSuccursale);

// Récupérer toutes les succursales d'un certain type
routerSuccursales.get("/type/:typeId", SuccursalesController.getSuccursalesByType);

export default routerSuccursales;
