import express from "express";
import logger from "morgan";
import rosterRoutes from "./routes/roster.route.js";
import seasonRoutes from "./routes/season.route.js";
import swaggerUi from "swagger-ui-express";
import swaggerJsDoc from "swagger-jsdoc";
const app = express();
const port = process.env.PORT || 3000;
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "L.A. Lakers API",
      description: "Lakers API information",
      version: "1.0.0"
    }
  },
  apis: ["./routes/roster.route.js"]
};
const swaggerDocs = swaggerJsDoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); //middlewares

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({
  extend: false
}));
app.use("/lakers/roster", rosterRoutes);
app.use("/lakers/season", seasonRoutes);
app.get("/lakers", (req, res) => res.send({
  message: "Welcome to Lakers API"
}));
app.get("*", (req, res) => res.status(404).send({
  message: "There is nothing here. No content to display. ERROR: 404"
}));
app.listen(port, () => {
  console.log("Listening on port " + port);
});