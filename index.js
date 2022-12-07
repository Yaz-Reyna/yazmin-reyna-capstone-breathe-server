const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT;

app.get('/', (request, response) => {
    response.send("Hello?");
});










app.listen(PORT, () => {
    console.log(`is ${PORT} working?`);
});