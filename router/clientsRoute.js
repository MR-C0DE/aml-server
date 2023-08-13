import { Router } from "express";
import { ClientsController } from "../controller/clientsController.js";

const routerClients = Router();

// Récupérer tous les clients
routerClients.get("/", ClientsController.getClients);

// Récupérer un client par ID
routerClients.get("/:id", ClientsController.getClientById);

// Ajouter un nouveau client
routerClients.post("/", ClientsController.createClient);

// Mettre à jour les informations d'un client
routerClients.put("/:id", ClientsController.updateClient);

// Supprimer un client
routerClients.delete("/:id", ClientsController.deleteClient);

// Récupérer tous les clients d'une entreprise
routerClients.get("/entreprise/:enterpriseId", ClientsController.getClientsByEnterprise);

export default routerClients;
