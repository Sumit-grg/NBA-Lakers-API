import { Router } from "express";
import { getAll, get, post, destroy } from "../controllers/controller.js";
const routes = Router(); //GET ALL

routes.get("/", getAll); //GET :ID

routes.get("/:id", get); //POST

routes.post("/", post); //DELETE

routes.delete("/:id", destroy);
export default routes;