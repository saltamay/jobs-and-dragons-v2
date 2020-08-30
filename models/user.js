var mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  adminname: String,
  adminpw: String
});

const UserSchema = new mongoose.Schema({
  username: String,
  userpw: String,
  picture: String,
  email: String,
  name: String,
  phone: Number,
  email: String,
  bio: String,
  experience: [],
  education: [],
  skills: [],
  projects: [],
  expertise: [],
  gamestats: { type: Map },
  inventory: { type: Map },
  progressTracker: {
    quest1: {
      dateSubmitted: String,
      approved: false
    },
    quest2: {
      dateSubmitted: String,
      approved: false
    },
    quest2: {
      dateSubmitted: String,
      approved: false
    }
  }
});

const User = mongoose.model('User', UserSchema);

module.exports = User;
