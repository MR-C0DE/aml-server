import "dotenv/config";
import winston from "winston";

// Configuration de Winston pour la journalisation
const logger = winston.createLogger({
  level: "info",
  format: winston.format.json(),
  defaultMeta: { service: "aml-server-api" },
  transports: [
    new winston.transports.File({ filename: "./logs/error.log", level: "error" }),
    new winston.transports.File({ filename: "./logs/combined.log" }),
  ],
});

// Si nous ne sommes pas en production, affichez également les journaux dans la console
if (process.env.NODE_ENV !== "production") {
  logger.add(new winston.transports.Console({ format: winston.format.simple() }));
}

// Renvoie un flux de journal pour Morgan
logger.stream = {
  write: function (message) {
    logger.info(message.trim());
  },
};

export default logger;

// install npm install morgan winston


