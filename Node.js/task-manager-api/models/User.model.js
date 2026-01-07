const mongoose = require("mongoose")
const userScehma = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  apiKey: { type: String, required: true}
});
module.exports = mongoose.model("User", userScehma)