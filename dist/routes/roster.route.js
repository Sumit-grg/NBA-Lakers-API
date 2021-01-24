import { Router } from "express";
import { getAll, get, post, destroy } from "../controllers/season.controller.js";
const rosterRoutes = Router(); //GET ALL

rosterRoutes.get("/", getAll); //GET :ID

rosterRoutes.get("/:id", get); //POST

rosterRoutes.post("/", post); //DELETE

rosterRoutes.delete("/:id", destroy);
export default rosterRoutes;