import "dotenv/config";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

import routerAchats from "./router/achatsRoute.js";
import routerAnalysesVentes from "./router/analysesVentesRoute.js";
import routerCategoriesProduits from "./router/categoriesProduitsRoute.js";
import routerClients from "./router/clientsRoute.js";
import routerCommandesFournisseurs from "./router/commandesFournisseursRoute.js";
import routerDetailsVentes from "./router/detailVentesRoute.js";
import routerEmployes from "./router/employesRoute.js";
import routerEntreprises from "./router/entreprisesRoute.js";
import routerFactures from "./router/facturesRoute.js";
import routerFournisseurs from "./router/fournisseursRoute.js";
import routerHistoriquePrix from "./router/historiquePrixRoute.js";
import routerHistoriqueModifications from "./router/historiquesModificationsRoute.js";
import routerJournalisationsOperations from "./router/journalisationsOperationsRoute.js";
import routerNotesInternes from "./router/notesInternesRoute.js";
import routerPresencesEmployes from "./router/presencesEmployesRoute.js";
import routerProduits from "./router/produitsRoute.js";
import routerRetoursProduits from "./router/retoursProduitsRoute.js";
import routerSuccursales from "./router/succursalesRoute.js";
import routerTransactions from "./router/transactionsRoute.js";
import routerTransactionsCaisse from "./router/transactionsCaisseRoute.js";
import routerTransfertsProduits from "./router/transfertsProduitsRoute.js";
import routerTypeEmployes from "./router/typeEmployesRoute.js";
import routerTypeSuccursales from "./router/typeSuccursalesRoute.js";
import routerUnitesMonetaires from "./router/unitesMonetairesRoute.js";
import routerUtilisateurs from "./router/utilisateursRoute.js";
import routerVentes from "./router/ventesRoute.js";





// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// Ajouter des routes
app.use("/achats", routerAchats);
app.use("/analysesVentes", routerAnalysesVentes);
app.use("/categoriesProduits", routerCategoriesProduits);
app.use("/clients", routerClients);
app.use("/commandesFournisseurs", routerCommandesFournisseurs);
app.use("/detailVentes", routerDetailsVentes);
app.use("/employes", routerEmployes);
app.use("/entreprises", routerEntreprises);
app.use("/factures", routerFactures);
app.use("/fournisseurs", routerFournisseurs);
app.use("/historiquePrix", routerHistoriquePrix);
app.use("/historiquesModifications", routerHistoriqueModifications);
app.use("/journalisationsOperations", routerJournalisationsOperations);
app.use("/notesInternes", routerNotesInternes);
app.use("/presencesEmployes", routerPresencesEmployes);
app.use("/produits", routerProduits);
app.use("/retoursProduits", routerRetoursProduits);
app.use("/succursales", routerSuccursales);
app.use("/transactions", routerTransactions);
app.use("/transactionsCaisse", routerTransactionsCaisse);
app.use("/transfertsProduits", routerTransfertsProduits);
app.use("/typeEmployes", routerTypeEmployes);
app.use("/typeSuccursales", routerTypeSuccursales);
app.use("/unitesMonetaires", routerUnitesMonetaires);
app.use("/utilisateurs", routerUtilisateurs);
app.use("/ventes", routerVentes);

// Démarrage du serveur
app.listen(process.env.PORT);
