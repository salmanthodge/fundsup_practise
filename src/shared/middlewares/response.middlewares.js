const responseMiddleware = (parsedResponse, req, res, next) => {
    res.setHeader("X-Request-Id", req.requestId);
    console.log(req.requestId)
  
  if (parsedResponse.statusCode >= 200 && parsedResponse.statusCode < 300) {
    res.status(parsedResponse.statusCode).send({
      code: parsedResponse.code,
      message: parsedResponse.message,
      result: parsedResponse.result,
      status: 1
    });
    next(JSON.stringify(parsedResponse));
  } else if (
    parsedResponse.statusCode >= 400 &&
    parsedResponse.statusCode < 500
  ) {
    res.status(parsedResponse.statusCode).send({
      code: parsedResponse.code,
      message: parsedResponse.message,
      status: 0
    });
    next(JSON.stringify(parsedResponse));
  } else {
    res.status(500).send({
      code: "500",
      message: "Internal Server Error",
      error: parsedResponse,
      status: 0
    });
    next(JSON.stringify(parsedResponse));
  }
};

module.exports = responseMiddleware;