import { Router } from "express";
import { UtilisateursController } from "../controller/utilisateursController.js";
import UtilisateursValide from "../validation/utilisateursValide.js";

const routerUtilisateurs = Router();

// Récupérer tous les utilisateurs
routerUtilisateurs.get("/", UtilisateursController.getUtilisateurs);

// Récupérer un utilisateur par ID
routerUtilisateurs.get("/:id", UtilisateursValide.id(), UtilisateursController.getUtilisateurById);

// Récupérer un utilisateur par matricule
routerUtilisateurs.get("/matricule/:matricule",  UtilisateursValide.utilisateurByMatricule(), UtilisateursController.getUtilisateurByMatricule);

// Ajouter un nouvel utilisateur
routerUtilisateurs.post("/",  UtilisateursValide.createUtilisateur(), UtilisateursController.createUtilisateur);

// Mettre à jour les informations d'un utilisateur
routerUtilisateurs.put("/:id",  UtilisateursValide.updateUtilisateur(), UtilisateursController.updateUtilisateur);

// Supprimer un utilisateur
routerUtilisateurs.delete("/:id", UtilisateursValide.id(), UtilisateursController.deleteUtilisateur);

export default routerUtilisateurs;
