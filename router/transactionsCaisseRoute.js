import { Router } from "express";
import { TransactionsCaisseController } from "../controller/transactionsCaisseController.js";

const routerTransactionsCaisse = Router();

// Récupérer toutes les transactions de caisse
routerTransactionsCaisse.get("/", TransactionsCaisseController.getTransactionsCaisse);

// Récupérer une transaction de caisse par ID
routerTransactionsCaisse.get("/:id", TransactionsCaisseController.getTransactionCaisseById);

// Récupérer les transactions de caisse d'un employé par ID
routerTransactionsCaisse.get("/employee/:employeeId", TransactionsCaisseController.getTransactionsByEmployee);

// Ajouter une nouvelle transaction de caisse
routerTransactionsCaisse.post("/", TransactionsCaisseController.createTransactionCaisse);

// Mettre à jour une transaction de caisse par ID
routerTransactionsCaisse.put("/:id", TransactionsCaisseController.updateTransactionCaisse);

// Supprimer une transaction de caisse par ID
routerTransactionsCaisse.delete("/:id", TransactionsCaisseController.deleteTransactionCaisse);

export default routerTransactionsCaisse;
