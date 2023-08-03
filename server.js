import "dotenv/config";
import express, { json, urlencoded } from "express";
import helmet from "helmet";
import compression from "compression";
import cors from "cors";

import routerSuccursale from "./router/succursaleRoute.js";
import routerEmployes from "./router/employesRoute.js";
import routerUtilisateur from "./router/utilisateurRoute.js";

// Création du serveur
const app = express();

// Ajout de middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(json());
app.use(urlencoded({ extended: false }));

// Ajouter des routes
app.use("/succursale", routerSuccursale);
app.use("/employe", routerEmployes);
app.use("/utilisateur", routerUtilisateur);

// Démarrage du serveur
app.listen(process.env.PORT);
