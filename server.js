require('dotenv').config();
const express = require('express');

const playersController = require('./controllers/playersController');
const leaderboardController = require('./controllers/leaderboardController');


// NEW EXPRESS INSTANCE
const app = express();


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Trivia app API!');
});

app.use('/players', playersController);
app.use('/leaderboard', leaderboardController);


// ACTIVATE THE SERVER TO LISTEN ON THE PORT
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
