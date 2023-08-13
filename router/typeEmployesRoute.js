import { Router } from "express";
import { TypeEmployesController } from "../controller/typeEmployesController.js";

const routerTypeEmployes = Router();

// Récupérer tous les types d'employés
routerTypeEmployes.get("/", TypeEmployesController.getTypeEmployes);

// Récupérer un type d'employé par ID
routerTypeEmployes.get("/:id", TypeEmployesController.getTypeEmployeById);

// Ajouter un nouveau type d'employé
routerTypeEmployes.post("/", TypeEmployesController.createTypeEmploye);

// Mettre à jour les informations d'un type d'employé
routerTypeEmployes.put("/:id", TypeEmployesController.updateTypeEmploye);

// Supprimer un type d'employé
routerTypeEmployes.delete("/:id", TypeEmployesController.deleteTypeEmploye);

// Récupérer les employés avec un type spécifique
routerTypeEmployes.get("/:typeId/employes", TypeEmployesController.getEmployesWithType);

export default routerTypeEmployes;
