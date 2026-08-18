const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  title: String,
  name: String,
  email: String,
});

module.exports = mongoose.model("Todo", todoSchema);
