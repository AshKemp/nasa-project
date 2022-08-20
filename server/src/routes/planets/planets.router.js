const express = require("express");
const { getAllPlanets } = require("../planets/planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/planets", getAllPlanets);

module.exports = planetsRouter;
