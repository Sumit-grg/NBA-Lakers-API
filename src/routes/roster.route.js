import { Router } from "express";
import {getAll, get, post, destroy} from "../controllers/roster.controller.js";

const rosterRoutes = Router();


rosterRoutes.get("/", getAll);
rosterRoutes.get("/:id", get);
rosterRoutes.post("/", post)
rosterRoutes.delete("/:id", destroy)


export default rosterRoutes;