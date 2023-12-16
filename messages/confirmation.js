const messageConfirmation = (matriculeEntreprise, matriculeEmploye, mot_de_passe) => {
    return `
Cher utilisateur,

Nous sommes heureux de vous informer que votre compte AML-business a été créé avec succès. Vous trouverez ci-dessous vos informations d'accès importantes :

- Matricule Utilisateur : ${matriculeEmploye}
- Matricule Entreprise  : ${matriculeEntreprise}
- Mot de passe initial  : ${mot_de_passe}

Il est impératif que vous mémorisiez soigneusement votre Matricule Utilisateur et Matricule Entreprise, car ils seront nécessaires pour accéder à votre compte à l'avenir. Assurez-vous de les conserver en lieu sûr.

Nous tenons à souligner l'importance de la sécurité de votre compte. Par conséquent, nous vous recommandons vivement de changer votre mot de passe dès votre première connexion. Pour ce faire, connectez-vous à votre compte en utilisant le mot de passe initial fourni, puis accédez aux paramètres de votre profil pour définir un nouveau mot de passe sécurisé.

De plus, nous souhaitons vous informer que vous bénéficiez d'une période d'essai de 3 mois pour profiter pleinement de nos services. Pour assurer la continuité de vos services au-delà de cette période, nous vous encourageons à effectuer le paiement de votre abonnement bien avant la fin de la période d'essai.

Votre sécurité est notre priorité. Si vous avez des questions ou avez besoin d'aide supplémentaire, n'hésitez pas à nous contacter à l'adresse support@aml-business.com.

Cordialement,
L'équipe AML-business
`;
}

export { messageConfirmation };
