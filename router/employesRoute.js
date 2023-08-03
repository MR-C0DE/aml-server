import { Router } from "express";
import { EmployesController } from "../controller/employesController.js";

const router = Router();

// Récupérer tous les employés
router.get("/", EmployesController.getEmployes);

// Récupérer un employé par ID
router.get("/:id", EmployesController.getEmployeById);

// Ajouter un nouvel employé
router.post("/", EmployesController.createEmploye);

// Mettre à jour les informations d'un employé
router.put("/:id", EmployesController.updateEmploye);

// Supprimer un employé
router.delete("/:id", EmployesController.deleteEmploye);

export default router;
