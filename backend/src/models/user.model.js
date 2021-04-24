const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userrSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  googleId: {
    type: String,
    required: false,
  },
  age: {
    type: Number,
    required: false,
  },
  gender: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  dateOfBirth: {
    type: String,
    required: false,
  },
  profilePicture: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Customers", customerSchema);