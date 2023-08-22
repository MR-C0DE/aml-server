import { Router } from "express";
import { SuccursalesController } from "../controller/succursalesController.js";
import SuccursalesValide from "../validation/succursalesValide.js";

const routerSuccursales = Router();

// Récupérer toutes les succursales
routerSuccursales.get("/", SuccursalesController.getSuccursales);

// Récupérer une succursale par ID
routerSuccursales.get("/:id",SuccursalesValide.id("id"), SuccursalesController.getSuccursaleById);

// Ajouter une nouvelle succursale
routerSuccursales.post("/", SuccursalesValide.createSuccursale() , SuccursalesController.createSuccursale);

// Mettre à jour les informations d'une succursale
routerSuccursales.put("/:id", SuccursalesValide.updateSuccursale(), SuccursalesController.updateSuccursale);

// Supprimer une succursale
routerSuccursales.delete("/:id", SuccursalesValide.id("id"), SuccursalesController.deleteSuccursale);

// Récupérer toutes les succursales d'un certain type
routerSuccursales.get("/type/:typeId",SuccursalesValide.id("typeId"), SuccursalesController.getSuccursalesByType);

export default routerSuccursales;
