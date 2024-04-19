const pino = require("pino");

/**
 * @param {pino.LoggerOptions} defaultConfig
 */
function getPinoLogger(defaultConfig) {
  const /** @type {pino.LoggerOptions} */ customConfig = {
      level: process.env.DEBUG_LOGGING == "true" ? "debug" : "info",
      formatters: {
        level: (/** @type {string} */ label) => {
          return { level: label.toUpperCase() };
        },
      },
      timestamp: pino.stdTimeFunctions.isoTime,
    };

  return pino({
    ...defaultConfig,
    ...customConfig,
  });
}

module.exports = {
  logger: getPinoLogger,
};
