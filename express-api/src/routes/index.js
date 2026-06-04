const express = require('express');
const apiController = require('../controllers/api.controller');

const router = express.Router();

router.get('/todos', apiController.getTodos);
router.get('/users', apiController.getUsers);
router.get('/posts', apiController.getPosts);

module.exports = router;
