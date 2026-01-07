const express = require("express");
require("dotenv").config();
const connectDB = require("./config/db");
const userRoutes = require("./routes/user.routes")
const taskRoutes = require("./routes/task.routes")
const app = express();
app.use(express.json());

connectDB();
app.use("/api/users",userRoutes);
app.use("/api/tasks", taskRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server running on port", process.env.PORT);
});