const express = require("express");
const { httpGetAllPlanets } = require("../planets/planets.controller");

const planetsRouter = express.Router();

planetsRouter.get("/planets", httpGetAllPlanets);

module.exports = planetsRouter;
