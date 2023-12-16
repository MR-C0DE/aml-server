import EmailSender from "../model/emailSender.js";
import { Employes } from "../model/employes.js";
import { Entreprises } from "../model/entreprises.js";
import { Utilisateurs } from "../model/utilisateurs.js";
import { messageConfirmation } from "../messages/confirmation.js";
import Validation from "../validation/validation.js";
import { AML_PeriodesEssai } from "../model/aml_periodesEssai.js";

class EntreprisesController {
  static async getEntreprises(request, response) {
    try {
      const entreprises = await Entreprises.selectEntreprises();
      response.status(200).json(entreprises);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting entreprises.");
    }
  }

  static async createEntreprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { nom, pays, ville, adresse, telephone, email, site_web } =
      request.body;
    const statut = "actif";
    const matricule = await Entreprises.generateUniqueMatricule();
    try {
      const result = await Entreprises.insertEntreprise(
        nom,
        pays,
        ville,
        adresse,
        telephone,
        email,
        site_web,
        matricule,
        statut
      );
      response.status(201).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error creating entreprise.");
    }
  }

  static async updateEntreprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const {
      id,
      nom,
      pays,
      ville,
      adresse,
      telephone,
      email,
      site_web,
      matricule,
      statut,
    } = request.body;

    try {
      const result = await Entreprises.updateEntreprise(
        id,
        nom,
        pays,
        ville,
        adresse,
        telephone,
        email,
        site_web,
        matricule,
        statut
      );
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error updating entreprise.");
    }
  }

  static async deleteEntreprise(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const result = await Entreprises.deleteEntreprise(id);
      response.status(200).json(result);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error deleting entreprise.");
    }
  }

  static async getEntrepriseById(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { id } = request.params;

    try {
      const entreprise = await Entreprises.getEntrepriseById(id);
      response.status(200).json(entreprise);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting entreprise by ID.");
    }
  }

  static async getEntreprisesInCountry(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { country } = request.params;

    try {
      const entreprises = await Entreprises.getEntreprisesInCountry(country);
      response.status(200).json(entreprises);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting entreprises in country.");
    }
  }

  static async getEntreprisesWithStatus(request, response) {
    const errorValide = Validation.valide(request, response);

    if (errorValide) {
      return;
    }
    const { status } = request.params;

    try {
      const entreprises = await Entreprises.getEntreprisesWithStatus(status);
      response.status(200).json(entreprises);
    } catch (error) {
      console.error(error);
      response.status(500).send("Error getting entreprises with status.");
    }
  }

  static async createAccountEntreprise(request, response) {
    try {
      const { info_entreprise, info_proprietaire } = request.body;
      const { nom, pays, ville, adresse, telephone, email, site_web } =
        info_entreprise;

      const statut = "essaie";
      const matriculeEntreprise = await Entreprises.generateUniqueMatricule();

      const resultEntreprise = await Entreprises.insertEntreprise(
        nom,
        pays,
        ville,
        adresse,
        telephone,
        email,
        site_web,
        matriculeEntreprise,
        statut
      );

      const {
        nomProprietaire,
        prenom,
        date_naissance,
        adresseProprietaire,
        telephoneProprietaire,
        emailProprietaire,
        photo,
      } = info_proprietaire;

      const statutEmploye = "actif";
      const salaire = "0.0";
      const dateEmbauche = "2000-01-01 00:00:00";
      const typeEmploye = 1;
      const matriculeEmploye = await Employes.generateUniqueMatricule();

      const resultEmploye = await Employes.insertEmploye(
        matriculeEmploye,
        nomProprietaire,
        prenom,
        date_naissance,
        adresseProprietaire,
        telephoneProprietaire,
        emailProprietaire,
        salaire,
        dateEmbauche,
        statutEmploye,
        photo,
        typeEmploye,
        resultEntreprise.insertId
      );

      const password = Utilisateurs.generatePassword(7);
      const hashedPassword = await Utilisateurs.cryptPasswordUtilisateur(
        password
      );
      const statutUtilisateur = "actif";
      const roleUtilisateur = 1;

      const resultUtilisateur = await Utilisateurs.insertUtilisateur(
        hashedPassword,
        statutUtilisateur,
        resultEmploye.insertId,
        roleUtilisateur
      );

      await AML_PeriodesEssai.insertPeriodeEssai(resultEntreprise.insertId, new Date(), 3)


      // Envoyer une réponse immédiate avec les données générées
      response.status(200).json({
        resultEntreprise,
        resultEmploye,
        resultUtilisateur,
  
    });


   
      // Maintenant, envoyez l'e-mail
      const emailSender = new EmailSender();
      const sujetConfirmation =
        "Confirmation de création de compte sur AML-business";
      const message = messageConfirmation(
        matriculeEntreprise,
        matriculeEmploye,
        password
      );
      await emailSender.sendEmail(
        emailProprietaire,
        sujetConfirmation,
        message
      );
    } catch (error) {
      console.error(error);
      response
        .status(500)
        .send("An error occurred while creating the account.");
    }
  }
}

export { EntreprisesController };
