const express = require("express");
const crypto = require("crypto");
const User = require("../models/User.model");
const router = express.Router();
router.post("/generate-key", async(req, res) => {
  const { email } = req.body
  const exists = await User.findOne({email});
  if(exists){
    return res.status(400).json({message: "Email Already Exists"})

  }
  const apiKey = "ak_" +crypto.randomBytes(6).toString("hex")
  await User.create({email, apiKey})
  res.status(201).json({ 
    apiKey
  })

})
module.exports = router;