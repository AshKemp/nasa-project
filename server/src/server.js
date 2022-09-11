const http = require("http");
const app = require("./app");
const mongoose = require("mongoose");

const { loadPlanets } = require("./models/planets.model");

require("dotenv").config();

const PORT = process.env.PORT || 8000;

const MONGO_URL = `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@nasacluster.cce0vpu.mongodb.net/nasa?retryWrites=true&w=majority`;

const server = http.createServer(app);

mongoose.connection.once("open", () => {
  console.log("MongoDB connection ready!");
});

mongoose.connection.on("error", (err) => {
  console.error(err);
});

async function startServer() {
  await mongoose.connect(MONGO_URL);
  await loadPlanets();

  server.listen(PORT, () => {
    console.log("Server listening on PORT: ", PORT);
  });
}

startServer();
