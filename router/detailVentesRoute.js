import { Router } from "express";
import { DetailsVentesController } from "../controller/detailsVentesController.js"; // Assurez-vous que le chemin du contrôleur est correct

const routerDetailsVentes = Router();

// Récupérer tous les détails de ventes
routerDetailsVentes.get("/", DetailsVentesController.getDetailsVentes);

// Créer un nouveau détail de vente
routerDetailsVentes.post("/", DetailsVentesController.createDetailsVente);

// Mettre à jour les informations d'un détail de vente
routerDetailsVentes.put("/:id", DetailsVentesController.updateDetailsVente);

// Supprimer un détail de vente
routerDetailsVentes.delete("/:id", DetailsVentesController.deleteDetailsVente);

// Récupérer un détail de vente par ID
routerDetailsVentes.get("/:id", DetailsVentesController.getDetailsVenteById);

// Récupérer les détails de ventes par ID de vente
routerDetailsVentes.get("/vente/:venteId", DetailsVentesController.getDetailsVenteByVenteId);

export default routerDetailsVentes;
