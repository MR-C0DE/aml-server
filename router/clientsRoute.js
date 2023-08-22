import { Router } from "express";
import { ClientsController } from "../controller/clientsController.js";
import ClientsValide from "../validation/clientsValide.js";

const routerClients = Router();

// Récupérer tous les clients
routerClients.get("/", ClientsController.getClients);

// Récupérer un client par ID
routerClients.get("/:id",ClientsValide.id("id"), ClientsController.getClientById);

// Ajouter un nouveau client
routerClients.post("/", ClientsValide.createClient(), ClientsController.createClient);

// Mettre à jour les informations d'un client
routerClients.put("/:id", ClientsValide.updateClient(), ClientsController.updateClient);

// Supprimer un client
routerClients.delete("/:id", ClientsValide.id("id"), ClientsController.deleteClient);

// Récupérer tous les clients d'une entreprise
routerClients.get("/entreprise/:entrepriseId", ClientsValide.id("entrepriseId"), ClientsController.getClientsByEnterprise);

export default routerClients;
