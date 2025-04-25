const express = require("express");
const logger = require("./middleware/logger");
const lyricsRoutes = require("./routes/lyricsRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

const app = express();

app.use(express.json());
app.use(logger);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Lyric Finder API",
      version: "1.0.0",
    },
  },
  apis: ["./routes/*.js"],
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.use("/", lyricsRoutes);

module.exports = app;
