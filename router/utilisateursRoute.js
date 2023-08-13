import { Router } from "express";
import { UtilisateursController } from "../controller/utilisateursController.js";

const routerUtilisateurs = Router();

// Récupérer tous les utilisateurs
routerUtilisateurs.get("/", UtilisateursController.getUtilisateurs);

// Récupérer un utilisateur par ID
routerUtilisateurs.get("/:id", UtilisateursController.getUtilisateurById);

// Récupérer un utilisateur par matricule
routerUtilisateurs.get("/matricule/:matricule", UtilisateursController.getUtilisateurByMatricule);

// Ajouter un nouvel utilisateur
routerUtilisateurs.post("/", UtilisateursController.createUtilisateur);

// Mettre à jour les informations d'un utilisateur
routerUtilisateurs.put("/:id", UtilisateursController.updateUtilisateur);

// Supprimer un utilisateur
routerUtilisateurs.delete("/:id", UtilisateursController.deleteUtilisateur);

export default routerUtilisateurs;
