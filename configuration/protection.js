import csrf from "csurf";
import helmet from "helmet";
import xss from "xss";

class Protection {
  // Middleware pour la protection CSRF
  static csrfProtection() {
    return csrf();
  }

  // Middleware pour la protection XSS
  static xssProtection() {
    return (request, response, next) => {
      // Appliquer la protection XSS sur les données entrantes
      request.body = xss(request.body);
      request.params = xss(request.params);
      request.query = xss(request.query);
      
      next();
    };
  }

  // Middleware pour la protection des en-têtes avec Helmet
  static helmetProtection() {
    return helmet();
  }

  // Middleware pour la protection contre d'autres suites de sécurité
  // Ajoutez d'autres protections selon vos besoins

  // Exemple de middleware pour la protection générale
  static generalProtection() {
    return (request, response, next) => {
      // Ajoutez ici d'autres mesures de sécurité nécessaires
      next();
    };
  }
}

export default Protection;
