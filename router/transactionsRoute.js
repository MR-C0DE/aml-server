import { Router } from "express";
import { TransactionsController } from "../controller/transactionsController.js"; // Assurez-vous que le chemin d'accès est correct
import TransactionsValide from "../validation/transactionsValide.js";

const routerTransactions = Router();

// Récupérer toutes les transactions
routerTransactions.get("/", TransactionsController.getTransactions);

// Récupérer une transaction par ID
routerTransactions.get("/:id",TransactionsValide.id("id"), TransactionsController.getTransactionById);

// Récupérer les transactions par ID d'entreprise
routerTransactions.get("/entreprise/:id_entreprise",TransactionsValide.id("id_entreprise"), TransactionsController.getTransactionsByEnterpriseId);

// Ajouter une nouvelle transaction
routerTransactions.post("/",TransactionsValide.createTransaction(), TransactionsController.createTransaction);

// Mettre à jour les informations d'une transaction
routerTransactions.put("/:id",TransactionsValide.updateTransaction() ,TransactionsController.updateTransaction);

// Supprimer une transaction
routerTransactions.delete("/:id", TransactionsValide.id("id"), TransactionsController.deleteTransaction);

export default routerTransactions;
