import { Router } from "express";
import { DetailsVentesController } from "../controller/detailsVentesController.js"; // Assurez-vous que le chemin du contrôleur est correct
import DetailsVentesValide from "../validation/detailsVentesValide.js";

const routerDetailsVentes = Router();

// Récupérer tous les détails de ventes
routerDetailsVentes.get("/", DetailsVentesController.getDetailsVentes);

// Créer un nouveau détail de vente
routerDetailsVentes.post("/",DetailsVentesValide.createDetailsVente() , DetailsVentesController.createDetailsVente);

// Mettre à jour les informations d'un détail de vente
routerDetailsVentes.put("/:id", DetailsVentesValide.updateDetailsVente() , DetailsVentesController.updateDetailsVente);

// Supprimer un détail de vente
routerDetailsVentes.delete("/:id", DetailsVentesValide.id(), DetailsVentesController.deleteDetailsVente);

// Récupérer un détail de vente par ID
routerDetailsVentes.get("/:id",DetailsVentesValide.id(), DetailsVentesController.getDetailsVenteById);

// Récupérer les détails de ventes par ID de vente
routerDetailsVentes.get("/vente/:venteId", DetailsVentesValide.id(), DetailsVentesController.getDetailsVenteByVenteId);

export default routerDetailsVentes;
