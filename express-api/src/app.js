const express = require('express');
const routes = require('./routes');
const setupSwagger = require('./swagger');

const app = express();

app.use(express.json());

// Setup Swagger
setupSwagger(app);

// API routes
app.use('/api', routes);

module.exports = app;
