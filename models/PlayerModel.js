const mongoose, { Schema } = require('../db/connection');
// const { Schema } =

const playerSchema = new Schema({
  name: {
    type: String,
    require: true,
    min: 6,
    max: 30,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  location: {
    type: String,
    max: 50,
    default: ''
  },
  gamesPlayed: {
    type: Number,
    default: 0
  },
  highScore: {
    type: Number,
    default: 0
  },
  totalScore: {
    type: Number,
    default: 0
  }
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);
