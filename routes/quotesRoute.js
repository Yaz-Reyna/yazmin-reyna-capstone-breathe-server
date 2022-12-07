const router = require('express').Router();
const quotesController = require('../controllers/quotesController');


router.route('/quotes').get(quotesController.allQuotes);

module.exports = router;