import { Router } from "express";
import { LoginController } from "../controller/loginController.js";

const routerLogin = Router();

// Récupérer toutes les notes internes
routerLogin.get("/", LoginController.connect);


export default routerLogin;
