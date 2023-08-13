import { Router } from "express";
import { EmployesController } from "../controller/employesController.js";

const routerEmployes = Router();

// Récupérer tous les employés
routerEmployes.get("/", EmployesController.getEmployes);

// Récupérer un employé par ID
routerEmployes.get("/:id", EmployesController.getEmployeById);

// Ajouter un nouvel employé
routerEmployes.post("/", EmployesController.createEmploye);

// Mettre à jour les informations d'un employé
routerEmployes.put("/:id", EmployesController.updateEmploye);

// Supprimer un employé
routerEmployes.delete("/:id", EmployesController.deleteEmploye);

export default routerEmployes;
