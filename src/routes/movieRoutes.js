// src/routes/movieRoutes.js
const express = require("express");
const movieController = require("../controllers/movieController");

const router = express.Router();

router.get("/", movieController.getShowsByMovie);

module.exports = router;
