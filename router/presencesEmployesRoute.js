import { Router } from "express";
import { PresencesEmployesController } from "../controller/presencesEmployesController.js";

const routerPresencesEmployes = Router();

// Récupérer toutes les présences d'employés
routerPresencesEmployes.get("/", PresencesEmployesController.getPresencesEmployes);

// Créer une nouvelle présence d'employé
routerPresencesEmployes.post("/", PresencesEmployesController.createPresenceEmploye);

// Mettre à jour les informations d'une présence d'employé
routerPresencesEmployes.put("/:id", PresencesEmployesController.updatePresenceEmploye);

// Supprimer une présence d'employé
routerPresencesEmployes.delete("/:id", PresencesEmployesController.deletePresenceEmploye);

// Récupérer une présence d'employé par ID
routerPresencesEmployes.get("/:id", PresencesEmployesController.getPresenceEmployeById);

// Récupérer les présences d'un employé spécifique
routerPresencesEmployes.get("/employee/:employeeId", PresencesEmployesController.getPresencesForEmployee);

// Récupérer les présences pour une succursale spécifique
routerPresencesEmployes.get("/succursale/:succursaleId", PresencesEmployesController.getPresencesForSuccursale);

export default routerPresencesEmployes;
