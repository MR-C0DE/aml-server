import { Router } from "express";
import { TypeEmployesController } from "../controller/typeEmployesController.js";
import TypeEmployesValide from "../validation/typeEmployesValide.js";

const routerTypeEmployes = Router();

// Récupérer tous les types d'employés
routerTypeEmployes.get("/", TypeEmployesController.getTypeEmployes);

// Récupérer un type d'employé par ID
routerTypeEmployes.get("/:id", TypeEmployesValide.id("id"), TypeEmployesController.getTypeEmployeById);

// Ajouter un nouveau type d'employé
routerTypeEmployes.post("/", TypeEmployesValide.createTypeEmploye(), TypeEmployesController.createTypeEmploye);

// Mettre à jour les informations d'un type d'employé
routerTypeEmployes.put("/:id", TypeEmployesValide.updateTypeEmploye(), TypeEmployesController.updateTypeEmploye);

// Supprimer un type d'employé
routerTypeEmployes.delete("/:id", TypeEmployesValide.id("id"), TypeEmployesController.deleteTypeEmploye);

// Récupérer les employés avec un type spécifique
routerTypeEmployes.get("/:typeId/employes", TypeEmployesValide.id("typeId"), TypeEmployesController.getEmployesWithType);

export default routerTypeEmployes;
