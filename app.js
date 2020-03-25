const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level="error";

logger.debug("Mi primera app con npm");
logger.info("Se ejecutó correctamente mi proceso");
logger.warn("No se encontró el archivo esperado");
logger.error("La aplicación no se pudo conectar a la base de datos");
logger.fatal("La aplicación no se pudo conectar a la base de datos");
