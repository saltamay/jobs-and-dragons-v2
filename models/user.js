var mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
  adminname: String,
  password: String
});

const UserSchema = new mongoose.Schema({
  studentname: String,
  password: String,
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

const User = mongoose.model('User', UserSchema, 'users');
const Admin = mongoose.model('Admin', AdminSchema, 'users');

module.exports = { User: User,
                   Admin: Admin };
