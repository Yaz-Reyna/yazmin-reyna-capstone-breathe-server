const router = require('express').Router();
const commentsController = require('../controllers/commentsController');


router
    .route('/comments')
        .get(commentsController.Comments)
        .post(commentsController.newComment);

module.exports = router;