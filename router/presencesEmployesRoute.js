import { Router } from "express";
import { PresencesEmployesController } from "../controller/presencesEmployesController.js";
import PresencesEmployesValide from "../validation/presencesEmployesValide.js";

const routerPresencesEmployes = Router();

// Récupérer toutes les présences d'employés
routerPresencesEmployes.get("/", PresencesEmployesController.getPresencesEmployes);

// Créer une nouvelle présence d'employé
routerPresencesEmployes.post("/", PresencesEmployesValide.createPresenceEmploye(), PresencesEmployesController.createPresenceEmploye);

// Mettre à jour les informations d'une présence d'employé
routerPresencesEmployes.put("/:id", PresencesEmployesValide.updatePresenceEmploye() , PresencesEmployesController.updatePresenceEmploye);

// Supprimer une présence d'employé
routerPresencesEmployes.delete("/:id", PresencesEmployesValide.id("id"), PresencesEmployesController.deletePresenceEmploye);

// Récupérer une présence d'employé par ID
routerPresencesEmployes.get("/:id", PresencesEmployesValide.id("id"), PresencesEmployesValide.id("id"), PresencesEmployesController.getPresenceEmployeById);

// Récupérer les présences d'un employé spécifique
routerPresencesEmployes.get("/employee/:employeeId", PresencesEmployesValide.id("employeeId"), PresencesEmployesController.getPresencesForEmployee);

// Récupérer les présences pour une succursale spécifique
routerPresencesEmployes.get("/succursale/:succursaleId", PresencesEmployesValide.id("succursaleId"), PresencesEmployesController.getPresencesForSuccursale);

export default routerPresencesEmployes;
