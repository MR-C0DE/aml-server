import { Router } from "express";
import { EmployesController } from "../controller/employesController.js";
import EmployesValide from "../validation/employesValide.js";

const routerEmployes = Router();

// Récupérer tous les employés
routerEmployes.get("/", EmployesController.getEmployes);

// Récupérer un employé par ID
routerEmployes.get("/:id", EmployesValide.id(), EmployesController.getEmployeById);

// Récupérer un employé par ID
routerEmployes.get("/entreprise/:id", EmployesValide.id(), EmployesController.getEmployeByIdEntreprise);

// Ajouter un nouvel employé
routerEmployes.post("/", EmployesValide.createEmploye() , EmployesController.createEmploye);

// Mettre à jour les informations d'un employé
routerEmployes.put("/:id", EmployesValide.id(), EmployesController.updateEmploye);

// Supprimer un employé
routerEmployes.delete("/:id", EmployesValide.id(), EmployesController.deleteEmploye);

export default routerEmployes;
