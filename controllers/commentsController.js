const knex = require('knex')(require('../knexfile.js'));

exports.Comments = async (req, res) => {
    
    try {
        const data = await knex('comments').select("*");
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send("Error retrieving information");
    }
        
}

exports.newComment = async (req, res) => {
    if (!req.body.name || !req.body.comment) {
        return res.status(400).send('Please make sure you fill out both fields');
    }
    try {
        const newComment = req.body;
        const data = await knex('comments').insert(newComment);
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send("Error posting a new comment");
    }
        
}