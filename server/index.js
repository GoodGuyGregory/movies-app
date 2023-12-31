const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./db');
// router for the movie endpoints
const movieRouter = require('./routes/movie-router')

const app = express();
const apiPort = 3000;


app.use(cors());


db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.use('/api', movieRouter)

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`));