const express = require("express");
const routes = express.Router();
const {getWords}=require('../controllers/wordsController');



routes.get("/", getWords);


//Global error handler
routes.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  res.status(statusCode).send({
    status: statusCode,
    message: err?.message || "internal server error",
    errors: err?.errors || [],
  });
});

module.exports = routes;
