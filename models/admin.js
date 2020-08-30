var mongoose = require('mongoose');

const AdminSchema = new mongoose.Schema({
    adminname: String,
    adminpw: String
  });

  const Admin = mongoose.model('Admin', AdminSchema);

module.exports = Admin;