const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  aadhar: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    required: true,
    min: 18,
  },
  address: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
    enum: ["Male", "Female"],
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    lowercase: true,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const AdminModel = mongoose.model("Admin", AdminSchema);

module.exports = AdminModel;

