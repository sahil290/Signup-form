const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: String,
  age: Number,
  password: String,
});
module.exports = mongoose.model("User", userSchema);
