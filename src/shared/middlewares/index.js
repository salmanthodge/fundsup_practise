const eventLoggingMiddleware = require("./event_logging.middlewares");
const responseMiddleware = require("./response.middlewares");


const sharedMiddlewares = {
    eventLoggingMiddleware,
    responseMiddleware
}

module.exports = sharedMiddlewares;