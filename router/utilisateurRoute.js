import { Router } from "express";
import { UtilisateurController } from "../controller/utilisateurController.js";

const router = Router();

// Récupérer tous les utilisateurs
router.get("/", UtilisateurController.getUtilisateurs);

// Récupérer un utilisateur par son id
router.get("/:id", UtilisateurController.getUtilisateurById);

// Récupérer un utilisateur par son matricule
router.get("/matricule/:matricule", UtilisateurController.getUtilisateurByMatricule);


// Créer un nouvel utilisateur
router.post("/", UtilisateurController.createUtilisateur);

// Modifier un utilisateur existant
router.put("/:id", UtilisateurController.updateUtilisateur);

// Supprimer un utilisateur existant
router.delete("/:id", UtilisateurController.deleteUtilisateur);

export default router;