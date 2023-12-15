-- Insertion dans la table roles_utilisateurs
INSERT INTO roles_utilisateurs (nom, description) VALUES
("Admin", "Rôle administrateur avec tous les privilèges."),
("Gestionnaire", "Rôle de gestionnaire avec certaines autorisations."),
("Vendeur", "Rôle de vendeur pour les opérations de vente."),
("Comptable", "Rôle de comptable pour les opérations financières."),
("Employé", "Rôle d'employé avec des autorisations limitées.");


-- Insertions pour la table type_employes
INSERT INTO type_employes (nom, description) VALUES
('Manager', 'Responsable de la gestion et de la supervision.'),
('Vendeur', 'Chargé de vendre les produits aux clients.'),
('Caissier', 'Responsable des transactions financières.'),
('Magasinier', 'Gère et organise les stocks.'),
('Assistant Manager', 'Assiste le manager dans ses tâches.');

-- Insertions pour la table entreprises
INSERT INTO entreprises (nom, pays, ville, adresse, telephone, email, site_web, matricule, statut) VALUES
('AML Tech', 'France', 'Paris', '123 Rue Tech', '+33 1 23 45 67 89', 'contact@amltech.com', 'www.amltech.com', 'AMLT123', 'Actif'),
('FourniPro', 'Canada', 'Montreal', '456 Rue Fournitures', '+1 514-123-4567', 'info@fournipro.ca', 'www.fournipro.ca', 'FPRO456', 'Actif'),
('EcoMart', 'USA', 'New York', '789 Green Street', '+1 212-555-7890', 'info@ecomart.com', 'www.ecomart.com', 'EMRT789', 'Actif'),
('Global Trade', 'Allemagne', 'Berlin', '101 Trade Avenue', '+49 30 12345678', 'info@globaltrade.de', 'www.globaltrade.de', 'GTRA101', 'Actif'),
('Fashion Trends', 'Royaume-Uni', 'Londres', '456 Fashion Road', '+44 20 1234 5678', 'info@fashiontrends.co.uk', 'www.fashiontrends.co.uk', 'FASH456', 'Actif');

-- Insertions pour la table categories_produits
INSERT INTO categories_produits (nom, description, id_entreprise) VALUES
('Électronique', 'Produits électroniques et gadgets.', 1),
('Vêtements', 'Vêtements et accessoires de mode.', 1),
('Alimentation', 'Produits alimentaires et boissons.', 2),
('Maison et Jardin', 'Articles pour la maison et le jardin.', 2),
('High-Tech', 'Produits technologiques avancés.', 3);

-- Insertions pour la table type_succursales
INSERT INTO type_succursales (entite) VALUES
('Siège social'),
('Boutique'),
('Entrepôt'),
('Magasin'),
('Centre commercial');

-- Insertions pour la table succursales
INSERT INTO succursales (nom, adresse, ville, code_emplacement, pays, telephone, email, id_entreprise, type_succursale) VALUES
('Siège France', '123 Rue Tech', 'Paris', '75001', 'France', '+33 1 23 45 67 89', 'siege@amltech.com', 1, 1),
('Boutique Paris', '456 Rue Mode', 'Paris', '75002', 'France', '+33 1 98 76 54 32', 'boutique@amltech.com', 1, 2),
('Entrepôt Canada', '789 Warehouse Street', 'Montreal', 'H2X 2J8', 'Canada', '+1 514-987-6543', 'warehouse@fournipro.ca', 2, 3),
('Magasin New York', '101 Trade Avenue', 'New York', '10001', 'USA', '+1 212-555-1234', 'store@globaltrade.de', 4, 4),
('Boutique Londres', '456 Fashion Road', 'Londres', 'SW1A 1AA', 'Royaume-Uni', '+44 20 5678 1234', 'boutique@fashiontrends.co.uk', 5, 2);

-- Insertions pour la table employes
INSERT INTO employes (matricule, nom, prenom, date_naissance, adresse, telephone, email, salaire, date_embauche, statut, photo, type_employe, id_entreprise)
VALUES
    ('M001', 'Dupont', 'Alice', '1990-05-15', '123 Rue de Paris', '1234567890', 'alice@example.com', 45000.00, '2022-01-10', 'Actif','image/none.png',  1, 1),
    ('M002', 'Martin', 'John', '1985-09-20', '456 Main Street', '9876543210', 'john@example.com', 55000.00, '2021-11-05', 'Actif','image/none.png', 2, 1),
    ('M003', 'Leclerc', 'Sophie', '1992-03-10', '789 Elm Avenue', '2345678901', 'sophie@example.com', 40000.00, '2023-02-15', 'Actif','image/none.png', 1, 2),
    ('M004', 'Garcia', 'David', '1988-07-08', '567 Oak Lane', '3456789012', 'david@example.com', 50000.00, '2022-03-20', 'Actif','image/none.png', 2, 2),
    ('M005', 'Lopez', 'Maria', '1991-12-25', '890 Maple Street', '4567890123', 'maria@example.com', 42000.00, '2023-04-30', 'Actif','image/none.png', 1, 1);


-- Insertions pour la table fournisseurs
INSERT INTO fournisseurs (nom, adresse, telephone, email, id_entreprise) VALUES
('ElectroTech', '123 Tech Street', '+33 1 23 45 67 89', 'contact@electrotech.com', 1),
('ModeStyle', '456 Fashion Avenue', '+1 514-987-6543', 'info@modestyle.ca', 2),
('FoodDelight', '789 Food Plaza', '+1 212-555-1234', 'orders@fooddelight.us', 3),
('HomeGoods', '101 Home Street', '+49 30 12345678', 'sales@homegoods.de', 4),
('TechSupplies', '456 Tech Road', '+44 20 5678 1234', 'support@techsupplies.co.uk', 5);

-- Insertions pour la table transactions
INSERT INTO transactions (type, date_transaction, montant, description, id_entreprise) VALUES
('Vente', '2022-01-20 09:30:00', 1200.00, 'Vente de produits électroniques', 1),
('Achat', '2022-02-10 15:45:00', 750.00, 'Achat de vêtements', 2),
('Vente', '2022-03-05 11:20:00', 1800.00, 'Vente de produits alimentaires', 3),
('Vente', '2022-04-18 14:00:00', 900.00, 'Vente darticles de maison', 4),
('Achat', '2022-05-05 12:30:00', 600.00, 'Achat de produits technologiques', 5);

-- Insertions pour la table clients
INSERT INTO clients (nom, prenom, adresse, telephone, email, id_entreprise) VALUES
('Martin', 'Lucie', '123 Rue Paris', '+33 1 23 45 67 89', 'lucie.martin@email.com', 1),
('Smith', 'John', '456 Fashion Street', '+1 514-987-6543', 'john.smith@email.com', 2),
('Garcia', 'Maria', '789 Food Road', '+1 212-555-1234', 'maria.garcia@email.com', 3),
('Müller', 'Hans', '101 Home Avenue', '+49 30 12345678', 'hans.muller@email.com', 4),
('Jones', 'Emily', '456 Tech Plaza', '+44 20 5678 1234', 'emily.jones@email.com', 5);

-- Insertions pour la table ventes
INSERT INTO ventes (date_vente, montant_total, id_succursale, id_employe) VALUES
('2022-01-20 09:30:00', 1200.00, 2, 1),
('2022-03-05 11:20:00', 1800.00, 3, 2),
('2022-04-18 14:00:00', 900.00, 4, 3),
('2022-05-10 16:45:00', 600.00, 5, 4),
('2022-06-15 10:15:00', 1500.00, 2, 1);

-- Insertions pour la table achats
INSERT INTO achats (date_achat, id_fournisseur, montant_total) VALUES
('2022-02-10 15:45:00', 1, 750.00),
('2022-05-05 12:30:00', 5, 600.00),
('2022-07-20 09:00:00', 3, 950.00),
('2022-08-15 14:30:00', 2, 1200.00),
('2022-09-28 11:45:00', 4, 850.00);

-- Insertions pour la table produits
INSERT INTO produits (nom, description, quantite, prix_unitaire, date_ajout, date_derniere_maj, seuil, code_produit, photo, categorie_produit, id_succursale) VALUES
('Smartphone', 'Téléphone intelligent haut de gamme.', 50, 599.99, '2022-01-20 09:30:00', '2022-01-20 09:30:00', 10, 'SPH001', 'None', 1, 2),
('Chemise', 'Chemise élégante pour hommes.', 100, 39.99, '2022-02-10 15:45:00', '2022-02-10 15:45:00', 20, 'CMS002', 'None', 2, 2),
('Chocolat', 'Chocolat noir suisse de qualité.', 200, 4.99, '2022-03-05 11:20:00', '2022-03-05 11:20:00', 30, 'CHC003', 'None', 3, 3),
('Lampe', 'Lampe de bureau moderne.', 80, 29.99, '2022-04-18 14:00:00', '2022-04-18 14:00:00', 15, 'LMP004', 'None', 4, 4),
('Ordinateur portable', 'Ordinateur portable puissant.', 30, 899.99, '2022-05-10 16:45:00', '2022-05-10 16:45:00', 5, 'LTP005', 'None', 5, 5);

-- Insertions pour la table commandes_fournisseurs
INSERT INTO commandes_fournisseurs (id_achat, id_produit, quantite, prix_achats) VALUES
(1, 2, 50, 35.00),
(1, 3, 100, 3.50),
(2, 5, 30, 800.00),
(3, 4, 50, 25.00),
(4, 1, 20, 550.00);

-- Insertions pour la table details_ventes
INSERT INTO details_ventes (id_vente, id_produit, quantite, prix_unitaire) VALUES
(1, 1, 3, 599.99),
(1, 4, 5, 4.99),
(2, 2, 2, 39.99),
(2, 3, 3, 4.99),
(3, 3, 5, 4.99);

-- Insertions pour la table presences_employes
INSERT INTO presences_employes (id_succursale, id_employe, heure_arrivee, heure_depart) VALUES
(2, 1, '2022-01-20 08:45:00', '2022-01-20 17:30:00'),
(3, 2, '2022-03-05 10:15:00', '2022-03-05 18:00:00'),
(4, 3, '2022-04-18 13:45:00', '2022-04-18 21:00:00'),
(5, 4, '2022-05-10 16:00:00', '2022-05-10 22:30:00'),
(2, 5, '2022-06-15 09:30:00', '2022-06-15 18:30:00');

-- Insertions pour la table transactions_caisse
INSERT INTO transactions_caisse (id_succursale, id_employe, montant, type, description, date_transaction) VALUES
(2, 1, 100.00, 'Entrée', 'Encaissement de vente', '2022-01-20 12:00:00'),
(3, 2, 30.00, 'Sortie', 'Remboursement client', '2022-03-05 15:30:00'),
(4, 3, 150.00, 'Entrée', 'Dépôt de recettes', '2022-04-18 18:15:00'),
(5, 4, 50.00, 'Sortie', 'Achat fournitures de bureau', '2022-05-10 17:00:00'),
(2, 1, 80.00, 'Sortie', 'Achat de collations', '2022-06-15 13:45:00');

-- Insertion dans la table utilisateurs
INSERT INTO utilisateurs (password, statut, id_employe, id_role) VALUES
('motdepasse1', 'Actif', 1, 1),
('motdepasse2', 'Actif', 2, 2),
('motdepasse3', 'Inactif', 3, 3),
('motdepasse4', 'Actif', 4, 4),
('motdepasse5', 'Inactif', 5, 5);

-- Insertions pour la table notes_internes
INSERT INTO notes_internes (sujet, contenu, date_creation, id_auteur, id_succursale) VALUES
('Réunion déquipe', 'La réunion déquipe est prévue pour demain à 14h.', '2022-01-20 10:00:00', 1, 2),
('Nouvelle collection', 'La nouvelle collection de vêtements est maintenant disponible en magasin.', '2022-03-05 13:30:00', 2, 3),
('Inventaire', 'Linventaire mensuel aura lieu la semaine prochaine.', '2022-04-18 16:45:00', 3, 4),
('Formation', 'Une formation sur les nouveaux produits est prévue pour le personnel.', '2022-05-10 11:00:00', 4, 5),
('Promotion', 'Offre spéciale : 20% de réduction sur les produits électroniques.', '2022-06-15 09:00:00', 1, 2);

-- Insertions pour la table factures
INSERT INTO factures (numero, date_emission, montant_total, id_client, id_vente) VALUES
('FCT001', '2022-01-20 09:30:00', 1200.00, 1, 1),
('FCT002', '2022-03-05 11:20:00', 1800.00, 2, 2),
('FCT003', '2022-04-18 14:00:00', 900.00, 3, 3),
('FCT004', '2022-05-10 16:45:00', 600.00, 4, 4),
('FCT005', '2022-06-15 10:15:00', 1500.00, 5, 5);

-- Insertions pour la table unites_monetaires
INSERT INTO unites_monetaires (code, nom, id_entreprise) VALUES
('EUR', 'Euro', 1),
('CAD', 'Dollar canadien', 2),
('USD', 'Dollar américain', 3),
('FC', 'Franc Congolais', 4),
('GBP', 'Livre sterling', 5);

-- Insertions pour la table historique_modifications
INSERT INTO historique_modifications (table_modifiee, id_enregistrement, champ_modifie, ancienne_valeur, nouvelle_valeur, date_modification, id_utilisateur) VALUES
('employes', 1, 'salaire', '4000.00', '4500.00', '2022-01-20 12:00:00', 1),
('ventes', 1, 'montant_total', '1100.00', '1200.00', '2022-01-20 10:30:00', 2),
('produits', 1, 'quantite', '49', '50', '2022-01-21 09:15:00', 3),
('clients', 1, 'adresse', '125 Rue Paris', '123 Rue Paris', '2022-01-22 14:45:00', 4),
('achats', 1, 'montant_total', '700.00', '750.00', '2022-02-10 16:30:00', 5);

-- Insertions pour la table journalisations_operations
INSERT INTO journalisations_operations (date_operation, id_utilisateur, type_operation, description) VALUES
('2022-01-20 12:00:00', 1, 'Connexion', 'Utilisateur Jean Dupont sest connecté.'),
('2022-02-15 15:30:00', 2, 'Déconnexion', 'Utilisateur Sophie Martin sest déconnectée.'),
('2022-03-10 09:45:00', 3, 'Modification', 'Champ "salaire" de lemployé Pierre Lambert a été modifié.'),
('2022-04-05 14:15:00', 4, 'Création', 'Nouveau client Maria Garcia ajouté.'),
('2022-05-20 11:30:00', 5, 'Vente', 'Vente de produits électroniques effectuée.');

-- Insertions pour la table aml_paiements_entreprises
INSERT INTO aml_paiements_entreprises (id_entreprise, date_paiement, montant) VALUES
(1, '2022-01-31 15:00:00', 5000.00),
(2, '2022-02-28 14:30:00', 3000.00),
(3, '2022-03-31 16:45:00', 4500.00),
(4, '2022-04-30 17:30:00', 6000.00),
(5, '2022-05-31 18:15:00', 3500.00);

-- Insertions pour la table analyses_ventes
INSERT INTO analyses_ventes (id_produit, mois_annee, ventes_totales, stock_initial, stock_final) VALUES
(1, '2022-01', 15, 50, 35),
(2, '2022-01', 25, 100, 75),
(3, '2022-01', 40, 200, 160),
(4, '2022-01', 10, 80, 70),
(5, '2022-01', 30, 30, 0),

(1, '2022-02', 18, 35, 17),
(2, '2022-02', 30, 75, 45),
(3, '2022-02', 50, 160, 110),
(4, '2022-02', 12, 70, 58),
(5, '2022-02', 25, 0, 0),

(1, '2022-03', 22, 17, 5),
(2, '2022-03', 40, 45, 5),
(3, '2022-03', 60, 110, 50),
(4, '2022-03', 15, 58, 43),
(5, '2022-03', 28, 0, 0);




INSERT INTO aml_abonnements (id_entreprise, duree, date_debut, date_prochain_paiement) VALUES
(1, 12, '2023-01-01', '2023-02-01'),
(2, 6, '2023-03-15', '2023-04-15'),
(3, 24, '2023-02-10', '2023-03-10'),
(4, 18, '2023-04-05', '2023-05-05'),
(5, 8, '2023-01-20', '2023-02-20');

INSERT INTO aml_periodes_essai (id_entreprise, date_debut, duree) VALUES
(1, '2023-01-05', 3),
(2, '2023-02-20', 2),
(3, '2023-03-10', 1),
(4, '2023-04-01', 4),
(5, '2023-01-15', 2);



INSERT INTO aml_paiements_entreprises (date_paiement, montant, id_abonnement) VALUES
('2023-02-01 12:00:00', 5000.00, 1),
('2023-04-15 14:30:00', 3000.50, 2),
('2023-03-10 10:00:00', 8000.75, 3),
('2023-05-05 18:45:00', 6000.20, 4),
('2023-02-20 09:15:00', 2500.80, 5);
