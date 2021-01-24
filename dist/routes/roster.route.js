import { Router } from "express";
import { getAll, get, post, destroy } from "../controllers/roster.controller.js";
const rosterRoutes = Router(); //GET ALL

/**
 * @swagger
 * /lakers/roster:
 *  get:
 *    description: aaaa
 *      responses:
 *        200:
 *          description: success
 */

rosterRoutes.get("/", getAll); //GET :ID

rosterRoutes.get("/:id", get); //POST

rosterRoutes.post("/", post); //DELETE

rosterRoutes.delete("/:id", destroy);
export default rosterRoutes;