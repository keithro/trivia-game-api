require('dotenv').config();
const express = require('express');
const cors = require('cors');

const playersController = require('./controllers/playersController');
const leaderboardController = require('./controllers/leaderboardController');


// NEW EXPRESS INSTANCE
const app = express();


// MIDDLEWARE
app.use(cors());
// Parses incoming URL-encoded data:
app.use(express.urlencoded({ extended: false }));
// Parses incoming JSON-encoded data from req.body:
app.use(express.json());
// app.use(morgan('combined'));


// ROUTES
app.get('/', (req, res) => {
  res.send('Welcome to the Trivia app API!');
});

app.use('/players', playersController);
app.use('/leaderboard', leaderboardController);


// ACTIVATE THE SERVER TO LISTEN ON THE PORT

// const PORT = process.env.PORT || 4000;
// app.listen(PORT, () => {
//   console.log(`Express server listening on port ${PORT}`);
// });

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});
