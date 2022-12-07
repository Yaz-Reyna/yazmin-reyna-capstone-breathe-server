const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT || 5050;

const quotesRoute = require('./routes/quotesRoute');

// app.get('/', (request, response) => {
//     response.send("Hello?");
// });

app.use('/', quotesRoute);








app.listen(PORT, () => {
    console.log(`is ${PORT} working?`);
});