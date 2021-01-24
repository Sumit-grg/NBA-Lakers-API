import { Router } from "express";
import {getAll, get, post, destroy} from "../controllers/season.controller.js";

const seasonRoutes = Router();

//GET ALL
seasonRoutes.get("/", getAll);

//GET :ID
seasonRoutes.get("/:id", get);

//POST
seasonRoutes.post("/", post)

//DELETE
seasonRoutes.delete("/:id", destroy)


export default seasonRoutes;