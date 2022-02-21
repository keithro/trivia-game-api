const express = require('express');
const router = express.Router();
const Player = require('../models/PlayerModel');


router.get('/', (req, res) => {
  res.send('Players Page');
});

router.post('/', async (req, res) => {
  const player = await Player.create(req.body);
  res.status(201).json({ status: 201, player:player})
})

module.exports = router;
