const mongoose = require("mongoose");
const connectDB = async () => {
  try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MONGODB connected");
  } catch(err){
    console.log("DB Connection get failed")
  }
}
module.exports = connectDB;