const express = require('express');
const apiController = require('../controllers/api.controller');

const router = express.Router();

/**
 * @swagger
 * /api/todos:
 *   get:
 *     summary: Get completed todos
 *     description: Retrieve completed todos, optionally filtered by user ID.
 *     parameters:
 *       - in: query
 *         name: userId
 *         schema:
 *           type: integer
 *         required: false
 *         description: Numeric ID of the user to get todos for
 *     responses:
 *       200:
 *         description: A successful response with todos
 *       500:
 *         description: Server error
 */
router.get('/todos', apiController.getTodos);

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Get users
 *     description: Retrieve users data.
 *     responses:
 *       200:
 *         description: A successful response with users
 *       500:
 *         description: Server error
 */
router.get('/users', apiController.getUsers);

/**
 * @swagger
 * /api/posts:
 *   get:
 *     summary: Get paginated posts
 *     description: Retrieve posts with pagination support.
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         required: false
 *         description: Page number for pagination
 *       - in: query
 *         name: limit
 *         schema:
 *           type: integer
 *         required: false
 *         description: Number of items per page
 *     responses:
 *       200:
 *         description: A successful response with paginated posts
 *       500:
 *         description: Server error
 */
router.get('/posts', apiController.getPosts);

module.exports = router;
