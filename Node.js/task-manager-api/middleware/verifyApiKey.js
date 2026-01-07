const User = require("../models/User.model");
const verifyApiKey = async (req, res, next) => {
  const apiKey = req.query.apiKey;
  if(!apiKey){
    return res.status(401).json({message:"API key missing"})
  }
  const user = await user.findOne({ apiKey });
  if(!user){
    return res.status(401).json({message:"Invalid API Key"})
  }
  next();
};
module.exports= verifyApiKey;