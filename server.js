import "dotenv/config";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";
import morgan from "morgan";

import logger from "./configuration/logger.js";

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

import AuthUtils from "./configuration/auth.js";
import routerLogin from "./router/loginRoute.js";
import limiter from "./configuration/rateLimitConfig.js";




// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));




app.use(limiter); // Appliquer les limites de taux d'appels

// Configuration de Morgan pour le logging des requêtes HTTP
app.use(morgan("combined", { stream: logger.stream }));

app.use(AuthUtils.authenticateApiKey)

// Ajouter des routes
app.use("/achats", AuthUtils.authenticateToken, routerAchats);
app.use("/analysesVentes", AuthUtils.authenticateToken, routerAnalysesVentes);
app.use("/categoriesProduits", AuthUtils.authenticateToken, routerCategoriesProduits);
app.use("/clients", AuthUtils.authenticateToken, routerClients);
app.use("/commandesFournisseurs", AuthUtils.authenticateToken, routerCommandesFournisseurs);
app.use("/detailVentes", AuthUtils.authenticateToken, routerDetailsVentes);
app.use("/employes", AuthUtils.authenticateToken, routerEmployes);
app.use("/entreprises", routerEntreprises);
app.use("/factures", AuthUtils.authenticateToken, routerFactures);
app.use("/fournisseurs", AuthUtils.authenticateToken, routerFournisseurs);
app.use("/historiquePrix", AuthUtils.authenticateToken, routerHistoriquePrix);
app.use("/historiquesModifications", AuthUtils.authenticateToken, routerHistoriqueModifications);
app.use("/journalisationsOperations", AuthUtils.authenticateToken, routerJournalisationsOperations);
app.use("/notesInternes", AuthUtils.authenticateToken, routerNotesInternes);
app.use("/presencesEmployes", AuthUtils.authenticateToken, routerPresencesEmployes);
app.use("/produits", AuthUtils.authenticateToken, routerProduits);
app.use("/retoursProduits", AuthUtils.authenticateToken, routerRetoursProduits);
app.use("/succursales", AuthUtils.authenticateToken, routerSuccursales);
app.use("/transactions", AuthUtils.authenticateToken, routerTransactions);
app.use("/transactionsCaisse", AuthUtils.authenticateToken, routerTransactionsCaisse);
app.use("/transfertsProduits", AuthUtils.authenticateToken, routerTransfertsProduits);
app.use("/typeEmployes", AuthUtils.authenticateToken, routerTypeEmployes);
app.use("/typeSuccursales", AuthUtils.authenticateToken, routerTypeSuccursales);
app.use("/unitesMonetaires", AuthUtils.authenticateToken, routerUnitesMonetaires);
app.use("/utilisateurs", AuthUtils.authenticateToken, routerUtilisateurs);
app.use("/ventes", AuthUtils.authenticateToken, routerVentes);
app.use("/login", routerLogin);


// Démarrage du serveur
app.listen(process.env.PORT);
