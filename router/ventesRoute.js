import { Router } from "express";
import { VentesController } from "../controller/ventesController.js"; // Assurez-vous d'importer le bon chemin vers votre contrôleur

const routerVentes = Router();

// Récupérer toutes les ventes
routerVentes.get("/", VentesController.getVentes);

// Récupérer une vente par ID
routerVentes.get("/:id", VentesController.getVenteById);

// Récupérer les ventes par succursale
routerVentes.get("/succursale/:succursaleId", VentesController.getVentesBySuccursale);

// Récupérer les ventes par employé
routerVentes.get("/employe/:employeId", VentesController.getVentesByEmploye);

// Ajouter une nouvelle vente
routerVentes.post("/", VentesController.createVente);

// Mettre à jour les informations d'une vente
routerVentes.put("/:id", VentesController.updateVente);

// Supprimer une vente
routerVentes.delete("/:id", VentesController.deleteVente);

export default routerVentes;
