const express = require('express');

const homepageController = require('../controllers/home');

const router = express.Router ();

router.get('/', homepageController.homePage);

module.exports = router;