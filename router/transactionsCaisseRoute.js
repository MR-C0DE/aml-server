import { Router } from "express";
import { TransactionsCaisseController } from "../controller/transactionsCaisseController.js";
import TransactionsCaisseValide from "../validation/transactionsCaisseValide.js";

const routerTransactionsCaisse = Router();

// Récupérer toutes les transactions de caisse
routerTransactionsCaisse.get("/", TransactionsCaisseController.getTransactionsCaisse);

// Récupérer une transaction de caisse par ID
routerTransactionsCaisse.get("/:id",TransactionsCaisseValide.id("id"), TransactionsCaisseController.getTransactionCaisseById);

// Récupérer les transactions de caisse d'un employé par ID
routerTransactionsCaisse.get("/employee/:employeeId", TransactionsCaisseValide.id("employeeId"),TransactionsCaisseController.getTransactionsByEmployee);

// Ajouter une nouvelle transaction de caisse
routerTransactionsCaisse.post("/", TransactionsCaisseValide.createTransactionCaisse() , TransactionsCaisseController.createTransactionCaisse);

// Mettre à jour une transaction de caisse par ID
routerTransactionsCaisse.put("/:id", TransactionsCaisseValide.updateTransactionCaisse(), TransactionsCaisseController.updateTransactionCaisse);

// Supprimer une transaction de caisse par ID
routerTransactionsCaisse.delete("/:id", TransactionsCaisseValide.id("id"), TransactionsCaisseController.deleteTransactionCaisse);

export default routerTransactionsCaisse;
