import { Router } from "express";
import { getAll, get, post, destroy } from "../controllers/season.controller.js";
const seasonRoutes = Router();
seasonRoutes.get("/", getAll);
seasonRoutes.get("/:id", get);
seasonRoutes.post("/", post);
seasonRoutes.delete("/:id", destroy);
export default seasonRoutes;