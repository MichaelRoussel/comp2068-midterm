// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const arcadegamesRoutes = require('./routes/arcadegames');

// Our home page
app.use('/', arcadegamesRoutes)

// Exporting the changes
module.exports = app;