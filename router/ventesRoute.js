import { Router } from "express";
import { VentesController } from "../controller/ventesController.js"; // Assurez-vous d'importer le bon chemin vers votre contrôleur
import VentesValide from "../validation/ventesValide.js";

const routerVentes = Router();

// Récupérer toutes les ventes
routerVentes.get("/", VentesController.getVentes);

// Récupérer une vente par ID
routerVentes.get("/:id", VentesValide.id("id"), VentesController.getVenteById);

// Récupérer les ventes par succursale
routerVentes.get("/succursale/:succursaleId", VentesValide.id("succursaleId"), VentesController.getVentesBySuccursale);

// Récupérer les ventes par employé
routerVentes.get("/employe/:employeId", VentesValide.id("employeId"), VentesController.getVentesByEmploye);

// Ajouter une nouvelle vente
routerVentes.post("/", VentesValide.createVente(), VentesController.createVente);

// Mettre à jour les informations d'une vente
routerVentes.put("/:id", VentesValide.updateVente(), VentesController.updateVente);

// Supprimer une vente
routerVentes.delete("/:id", VentesValide.id("id"), VentesController.deleteVente);

export default routerVentes;
