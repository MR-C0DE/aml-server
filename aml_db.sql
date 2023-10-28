-- Base de données : `aml_db`

-- --------------------------------------------------------

-- Structure de la table `roles_utilisateurs`

CREATE TABLE `roles_utilisateurs` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(50) NOT NULL,
    `description` text,
    PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Structure de la table `type_employes`

CREATE TABLE `type_employes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(50) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `entreprises`

CREATE TABLE `entreprises` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `pays` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `adresse` varchar(255) DEFAULT NULL,
  `telephone` varchar(20) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `site_web` varchar(255) DEFAULT NULL,
  `matricule` varchar(50) DEFAULT NULL,
  `statut` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `categories_produits`

CREATE TABLE `categories_produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `id_entreprise` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_entreprise` (`id_entreprise`),
  CONSTRAINT `categories_produits_ibfk_1` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprises` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `type_succursales`

CREATE TABLE `type_succursales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `entite` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `succursales`

CREATE TABLE `succursales` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `ville` varchar(255) NOT NULL,
  `code_emplacement` varchar(10) NOT NULL,
  `pays` varchar(255) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `id_entreprise` int(11) NOT NULL,
  `type_succursale` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_entreprise` (`id_entreprise`),
  KEY `type_succursale` (`type_succursale`),
  CONSTRAINT `succursales_ibfk_1` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprises` (`id`),
  CONSTRAINT `succursales_ibfk_2` FOREIGN KEY (`type_succursale`) REFERENCES `type_succursales` (`id`)

) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Structure de la table `employes`

CREATE TABLE `employes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `matricule` varchar(50) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(50) NOT NULL,  
  `date_naissance` date NOT NULL,
  `adresse` varchar(255) NOT NULL,
  `telephone` varchar(20) NOT NULL,
  `email` varchar(255) NOT NULL,
  `salaire` decimal(10,2) NOT NULL,
  `date_embauche` date NOT NULL,
  `statut` varchar(50) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `type_employe` int(11) NOT NULL,
  `id_entreprise` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `type_employe` (`type_employe`),
  KEY `id_entreprise` (`id_entreprise`),
  CONSTRAINT `employes_ibfk_1` FOREIGN KEY (`type_employe`) REFERENCES `type_employes` (`id`),
  CONSTRAINT `employes_ibfk_2` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprises` (`id`),
  CONSTRAINT `unique_matricule_per_company` UNIQUE (`matricule`, `id_entreprise`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

-- Structure de la table `fournisseurs`

CREATE TABLE `fournisseurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `adresse` text,
  `telephone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id_entreprise` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_entreprise` (`id_entreprise`),
  CONSTRAINT `fournisseurs_ibfk_1` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprises` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `transaction`

CREATE TABLE `transactions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `type` varchar(50) NOT NULL,
  `date_transaction` datetime NOT NULL,
  `montant` decimal(10,2) NOT NULL,
  `description` text,
  `id_entreprise` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `transactions_ibfk_1` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprises` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

-- Structure de la table `clients`

CREATE TABLE `clients` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `prenom` varchar(255) NOT NULL,
  `adresse` text,
  `telephone` varchar(255) DEFAULT NULL,
  `email` varchar(255) DEFAULT NULL,
  `id_entreprise` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_entreprise` (`id_entreprise`),
  CONSTRAINT `clients_ibfk_1` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprises` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `ventes`

CREATE TABLE `ventes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_vente` datetime NOT NULL,
  `montant_total` decimal(10,2) NOT NULL,
  `id_succursale` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_succursale` (`id_succursale`),
  KEY `id_employe` (`id_employe`),
  CONSTRAINT `ventes_ibfk_1` FOREIGN KEY (`id_succursale`) REFERENCES `succursales` (`id`),
  CONSTRAINT `ventes_ibfk_2` FOREIGN KEY (`id_employe`) REFERENCES `employes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

 

-- --------------------------------------------------------

-- Structure de la table `achats`

CREATE TABLE `achats` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_achat` datetime NOT NULL,
  `id_fournisseur` int(11) NOT NULL,
  `montant_total` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_fournisseur` (`id_fournisseur`),
  CONSTRAINT `achats_ibfk_1` FOREIGN KEY (`id_fournisseur`) REFERENCES `fournisseurs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `produits`

CREATE TABLE `produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) NOT NULL,
  `description` text,
  `quantite` int(11) NOT NULL,
  `prix_unitaire` decimal(10,2) NOT NULL,
  `date_ajout` datetime NOT NULL,
  `date_derniere_maj` datetime NOT NULL,
  `seuil` int(11) NOT NULL,
  `code_produit` varchar(255) NOT NULL,
  `photo` varchar(255) NOT NULL,
  `categorie_produit` int(11) NOT NULL,
  `id_succursale` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `categorie_produit` (`categorie_produit`),
  KEY `id_succursale` (`id_succursale`),
  CONSTRAINT `produits_ibfk_1` FOREIGN KEY (`categorie_produit`) REFERENCES `categories_produits` (`id`),
  CONSTRAINT `produits_ibfk_2` FOREIGN KEY (`id_succursale`) REFERENCES `succursales` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `commandes_fournisseurs`

CREATE TABLE `commandes_fournisseurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_achat` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `prix_achats` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_achat` (`id_achat`),
  KEY `id_produit` (`id_produit`),
  CONSTRAINT `commandes_fournisseurs_ibfk_1` FOREIGN KEY (`id_achat`) REFERENCES `achats` (`id`),
  CONSTRAINT `commandes_fournisseurs_ibfk_2` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `details_ventes`

CREATE TABLE `details_ventes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_vente` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `prix_unitaire` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_vente` (`id_vente`),
  KEY `id_produit` (`id_produit`),
  CONSTRAINT `details_ventes_ibfk_1` FOREIGN KEY (`id_vente`) REFERENCES `ventes` (`id`),
  CONSTRAINT `details_ventes_ibfk_2` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `horaires_employes`

CREATE TABLE `presences_employes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_succursale` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL,
  `heure_arrivee` datetime NOT NULL,
  `heure_depart` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_succursale` (`id_succursale`),
  KEY `id_employe` (`id_employe`),
  CONSTRAINT `fk_horaire_employe` FOREIGN KEY (`id_employe`) REFERENCES `employes` (`id`),
  CONSTRAINT `fk_horaire_succursale` FOREIGN KEY (`id_succursale`) REFERENCES `succursales` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `transactions_caisse`

CREATE TABLE `transactions_caisse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_succursale` int(11) NOT NULL,
  `id_employe` int(11) NOT NULL,
  `montant` decimal(10,2) DEFAULT NULL,
  `type` varchar(10) NOT NULL,
  `description` text,
  `date_transaction` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_succursale` (`id_succursale`),
  KEY `id_employe` (`id_employe`),
  CONSTRAINT `transactions_caisse_ibfk_1` FOREIGN KEY (`id_succursale`) REFERENCES `succursales` (`id`),
  CONSTRAINT `transactions_caisse_ibfk_2` FOREIGN KEY (`id_employe`) REFERENCES `employes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `utilisateurs`

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(255) NOT NULL,
  `statut` varchar(50) NOT NULL,
  `id_employe` int(11) NOT NULL,
  `id_role` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_employe` (`id_employe`),
  KEY `id_role` (`id_role`),
  CONSTRAINT `utilisateurs_ibfk_1` FOREIGN KEY (`id_employe`) REFERENCES `employes` (`id`),
  CONSTRAINT `utilisateurs_ibfk_2` FOREIGN KEY (`id_role`) REFERENCES `roles_utilisateurs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- --------------------------------------------------------

-- Structure de la table `notes_internes`

CREATE TABLE `notes_internes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sujet` varchar(255) NOT NULL,
  `contenu` text NOT NULL,
  `date_creation` datetime NOT NULL,
  `id_auteur` int(11) NOT NULL,
  `id_succursale` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_auteur` (`id_auteur`),
  KEY `id_succursale` (`id_succursale`),
  CONSTRAINT `notes_internes_ibfk_1` FOREIGN KEY (`id_auteur`) REFERENCES `employes` (`id`),
  CONSTRAINT `notes_internes_ibfk_2` FOREIGN KEY (`id_succursale`) REFERENCES `succursales` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `factures`

CREATE TABLE `factures` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `numero` varchar(50) NOT NULL,
  `date_emission` datetime NOT NULL,
  `montant_total` decimal(10,2) NOT NULL,
  `id_client` int(11) NOT NULL,
  `id_vente` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_client` (`id_client`),
  KEY `id_vente` (`id_vente`),
  CONSTRAINT `fk_facture_client` FOREIGN KEY (`id_client`) REFERENCES `clients` (`id`),
  CONSTRAINT `fk_facture_vente` FOREIGN KEY (`id_vente`) REFERENCES `ventes` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Structure de la table `unite_monetaire`
CREATE TABLE `unites_monetaires` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(10) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `id_entreprise` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `code` (`code`),
  CONSTRAINT `fk_unite_monetaires` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprises` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `historique_modifications`
CREATE TABLE `historique_modifications` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `table_modifiee` varchar(50) NOT NULL,
  `id_enregistrement` int(11) NOT NULL,
  `champ_modifie` varchar(50) NOT NULL,
  `ancienne_valeur` text,
  `nouvelle_valeur` text,
  `date_modification` datetime NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_histo_utilisateur` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

-- Structure de la table `journalisations_operations`
CREATE TABLE `journalisations_operations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date_operation` datetime NOT NULL,
  `id_utilisateur` int(11) NOT NULL,
  `type_operation` varchar(50) NOT NULL,
  `description` text,
  PRIMARY KEY (`id`),
  CONSTRAINT `fk_journalisation_utilisateur` FOREIGN KEY (`id_utilisateur`) REFERENCES `utilisateurs` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;





-- --------------------------------------------------------








-- ######################################
-- # INFORMATION APPARTENANT A AML-TECH #
-- ######################################

-- Structure de la table `aml_paiements_entreprises`

CREATE TABLE `aml_paiements_entreprises` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_entreprise` int(11) NOT NULL,
  `date_paiement` datetime NOT NULL,
  `montant` decimal(10,2) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_entreprise` (`id_entreprise`),
  CONSTRAINT `aml_paiements_entreprises_ibfk_1` FOREIGN KEY (`id_entreprise`) REFERENCES `entreprises` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------










-- ###############################
-- ###############################
-- ######### EN ATTENTE ##########
-- ###############################
-- ###############################

-- Table `retours_produits`
CREATE TABLE `retours_produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_vente` int(11) NOT NULL,
  `id_produit` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `raison` text,
  `date_retour` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_vente` (`id_vente`),
  KEY `id_produit` (`id_produit`),
  CONSTRAINT `fk_retours_vente` FOREIGN KEY (`id_vente`) REFERENCES `ventes` (`id`),
  CONSTRAINT `fk_retours_produit` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


-- Table `transferts_produits`
CREATE TABLE `transferts_produits` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_produit` int(11) NOT NULL,
  `id_succursale_source` int(11) NOT NULL,
  `id_succursale_destination` int(11) NOT NULL,
  `quantite` int(11) NOT NULL,
  `date_transfert` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_produit` (`id_produit`),
  KEY `id_succursale_source` (`id_succursale_source`),
  KEY `id_succursale_destination` (`id_succursale_destination`),
  CONSTRAINT `fk_transferts_produit` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`),
  CONSTRAINT `fk_transferts_source` FOREIGN KEY (`id_succursale_source`) REFERENCES `succursales` (`id`),
  CONSTRAINT `fk_transferts_destination` FOREIGN KEY (`id_succursale_destination`) REFERENCES `succursales` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table `historique_prix`
CREATE TABLE `historique_prix` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_produit` int(11) NOT NULL,
  `prix_unitaire` decimal(10,2) NOT NULL,
  `date_mise_a_jour` datetime NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_produit` (`id_produit`),
  CONSTRAINT `fk_historique_prix_produit` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- Table `analyses_ventes`
CREATE TABLE `analyses_ventes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_produit` int(11) NOT NULL,
  `mois_annee` varchar(7) NOT NULL,
  `ventes_totales` int(11) NOT NULL,
  `stock_initial` int(11) NOT NULL,
  `stock_final` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `id_produit` (`id_produit`),
  CONSTRAINT `fk_analyses_ventes_produit` FOREIGN KEY (`id_produit`) REFERENCES `produits` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;


