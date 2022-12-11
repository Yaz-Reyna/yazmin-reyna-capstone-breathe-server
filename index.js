const express = require('express');
const app = express();

app.use(express.json());

require('dotenv').config();
const PORT = process.env.PORT || 5050;

const quotesRoute = require('./routes/quotesRoute');
const commentsRoute = require('./routes/commentsRoute');

app.use('/', quotesRoute);
app.use('/', commentsRoute);


const cors = require('cors');
app.use(cors());




app.listen(PORT, () => {
    console.log(`is ${PORT} working?`);
});