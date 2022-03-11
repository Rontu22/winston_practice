const logger = require("./index");

logger.log({
  level: "info",
  message: "Hello distributed log files",
});

logger.info("Hello again distributed logs");
