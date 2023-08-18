// rateLimitConfig.js

import rateLimit from "express-rate-limit";


const MINUTES = 15;
const limiter = rateLimit({
  windowMs: MINUTES * 60 * 1000,
  max: 100, // Nombre maximum de requêtes par adresse IP pendant la fenêtre spécifiée
  message: "Trop de requêtes depuis cette adresse IP. Veuillez réessayer plus tard.",
});

export default limiter;
