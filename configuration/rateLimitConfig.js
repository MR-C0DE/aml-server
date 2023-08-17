// rateLimitConfig.js

import rateLimit from "express-rate-limit";

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Nombre maximum de requêtes par adresse IP pendant la fenêtre spécifiée
  message: "Trop de requêtes depuis cette adresse IP. Veuillez réessayer plus tard.",
});

export default limiter;
