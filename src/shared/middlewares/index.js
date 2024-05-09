const authMiddleware = require("./auth.middlewares");
const eventLoggingMiddleware = require("./event_logging.middlewares");
const responseMiddleware = require("./response.middlewares");


const sharedMiddlewares = {
    eventLoggingMiddleware,
    responseMiddleware,
    authMiddleware
}

module.exports = sharedMiddlewares;