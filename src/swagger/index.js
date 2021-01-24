//ROSTER

//GETALL
/**
 * @swagger
 * paths:
 *  /lakers/roster:
 *   get:
 *     tags: 
 *      - Roster
 *     description: Returns all players and coaches of Lakers (2020-2021)
 *     responses:
 *       200:
 *         description: Success
 */
//GET
/**
 * @swagger
 * /lakers/roster/{id}:
 *  get:
 *    tags: 
 *      - Roster
 *    description: Returns a single player/coach associated with the Id
 *    responses:
 *     200:
 *      description: Success
 */
//POST
/**
 * @swagger
 * /lakers/roster:
 *  post:
 *    tags: 
 *      - Roster
 *    description: Add a new player/coach to the roster
 *    responses:
 *     201:
 *      description: New entry successfully added
 */
//DELETE
/**
 * @swagger
 * /lakers/roster/{id}:
 *  delete:
 *    tags: 
 *      - Roster
 *    description: Deletes a player/coach associated with the Id
 *    responses:
 *     204:
 *      description: Deleted
 */

 //SEASON
//GetALL
/**
 * @swagger
 * /lakers/season:
 *  get:
 *    tags:
 *      - Season
 *    description: Season stats from 1990 to 2020
 *    responses:
 *     200:
 *      description: Success
 */
//Get
/**
 * @swagger
 * /lakers/season/{year}:
 *  get:
 *    tags:
 *      - Season
 *    description: Returns a stats from the year.
 *    responses:
 *     200:
 *      description: Success
 */
//POST
/**
 * @swagger
 * /lakers/season:
 *  post:
 *    tags:
 *      - Season
 *    description: Add a new stats
 *    responses:
 *     201:
 *      description: New stats successfully added
 */
//DELETE
/**
 * @swagger
 * /lakers/season/{year}:
 *  delete:
 *    tags:
 *      - Season
 *    description: Deletes a stat from the year
 *    responses:
 *     204:
 *      description: Deleted
 */