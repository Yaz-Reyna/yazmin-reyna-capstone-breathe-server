const knex = require('knex')(require('../knexfile.js'));

exports.allQuotes = async (req, res) => {
    
    try {
        const data = await knex('quotes').select("*");
        res.status(200).json(data);
    } catch (err) {
        res.status(400).send("Error retrieving information");
    }
        
}