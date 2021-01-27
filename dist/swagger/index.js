//ROSTER
//GETALL

/**
 * @swagger
 * paths:
 *  /lakers/roster:
 *   get:
 *     tags: 
 *      - Roster
 *     summary: Get all players and coaches
 *     description: Returns all players and coaches of Lakers (2020-2021)
 *     responses:
 *       200:
 *         description: Success
 *       default:
 *         description: Unexpected error
 */
//GET

/**
 * @swagger
 * /lakers/roster/{id}:
 *  get:
 *    tags: 
 *      - Roster
 *    summary: Find player/coach by id
 *    description: Returns a single player/coach associated with the given Id
 *    operationId: getUserById
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: id of player/coach to return
 *        schema:
 *          type: integer
 *    responses:
 *     200:
 *      description: Success
 *     404:
 *      description: Given id does not exists
 *     default:
 *      description: Unexpected error
 *   
 *        
 */
//POST

/**
 * @swagger
 * /lakers/roster:
 *  post:
 *    tags: 
 *      - Roster
 *    summary: Creates new player/coach
 *    description: Add a new player/coach to the roster
 *    consumes:
 *      - applicatio/json
 *    parameters:
 *      - in: body
 *        name: roster
 *        schema:
 *          type: object
 *          required:
 *            - player
 *          properties:
 *              id:
 *                type: integer
 *              name:
 *                type: string
 *              number:
 *                type: integer
 *              position:
 *                type: string
 *              dob:
 *                type: string
 *              height:
 *                type: string
 *              info:
 *                type: string
 *              img:
 *                type: string
 *    responses:
 *     201:
 *      description: New entry successfully added
 *     default:
 *      description: Unexpected error
 */
//DELETE

/**
 * @swagger
 * /lakers/roster/{id}:
 *  delete:
 *    tags: 
 *      - Roster
 *    summary: Deletes a player/coach
 *    description: Deletes a player/coach associated with the given Id
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: id of player/coach to delete
 *        schema:
 *          type: integer
 *    responses:
 *     204:
 *      description: Deleted
 *     default:
 *      description: Unexpected error 
 */
//SEASON
//GetALL

/**
 * @swagger
 * /lakers/season/:
 *  get:
 *    tags:
 *      - Season
 *    summary: Get all stats
 *    description: Season stats from 1990 to 2020
 *    responses:
 *     200:
 *      description: Success
 *     default:
 *      description: Unexpected error
 */
//Get

/**
 * @swagger
 * /lakers/season/{year}:
 *  get:
 *    tags:
 *      - Season
 *    summary: Find season stats by year
 *    description: Returns a stat from the given year.
 *    parameters:
 *      - in: path
 *        name: year
 *        required: true
 *        type: integer
 *        description: year of a season to return
 *    responses:
 *     200:
 *      description: Success
 *     404:
 *      description: Given year does not exists
 *     default:
 *      description: Unexpected error
 */
//POST

/**
 * @swagger
 * /lakers/season/:
 *  post:
 *    tags:
 *      - Season
 *    summary: Creates new stat
 *    description: Add a new stats
 *    responses:
 *     201:
 *      description: New stats successfully added
 *     default:
 *      description: Unexpected error
 */
//DELETE

/**
 * @swagger
 * /lakers/season/{year}:
 *  delete:
 *    tags:
 *      - Season
 *    summary: Deletes stat
 *    description: Deletes a stat from the given year
 *    parameters:
 *      - in: path
 *        name: id
 *        required: true
 *        description: year of a season to delete
 *        schema:
 *          type: integer
 *    responses:
 *     204:
 *      description: Deleted
 *     default:
 *      description: Unexpected error
 */