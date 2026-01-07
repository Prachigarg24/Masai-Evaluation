const mongoose = require("mongoose");
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  status: String,
  priority: String,
  dueDate: String,
  createdAt: {type: Date, default: Date.now}
})
module.exports = mongoose.model("Task", taskSchema);