const router = require('express').Router();

//Our controllers
const PagesController = require('../controllers/pagesController');

// Create our routes
router.get('/', PagesController.show);

module.exports = router;


