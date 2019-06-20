// Our Express app module
const express = require('express');
const app = express();

// Importing the pageRoutes
const pageRoutes = require('./routes/pages');
const arcadegamesRoutes = require('./routes/arcadegames');

// Our home page
app.use('/', pageRoutes);
app.use('/arcadegames', arcadegamesRoutes)

// Exporting the changes
module.exports = app;