import { body } from "express-validator";

class LoginValide {
  static connect() {
    return [];
  }

  static connexion() {
    return [
      body("matricule")
        .notEmpty()
        .withMessage("Le matricule ne doit pas être vide"),
      body("password")
        .notEmpty()
        .withMessage("Le mot de passe ne doit pas être vide"),
    ];
  }
}

export default LoginValide;
