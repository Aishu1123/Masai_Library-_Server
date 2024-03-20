const express = require("express");
const bcrypt = require("bcrypt");
const { UserModel } = require("../Model/user.model");
const jwt = require("jsonwebtoken")
const userRouter = express.Router();


userRouter.post("/register",(req,res)=>{
    const{name , email, password , isAdmin}= req.body;
    try{
        bcrypt.hash(password,6,async(err,hash)=>{
            if(err){
                res.status(400).send({msg:err}) 
            }else{
            const user = new UserModel({name , email, password:hash, isAdmin})
            await user.save();
            res.status(201).send({msg:"Hey! You are registered Successfully"})
            }
        })
      
    }catch(err){
        res.status(500).send({msg:"Internal Server Error"}) 
    }
})

//login
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await UserModel.findOne({ email });
      if (user) {
        bcrypt.compare(password, user.password, (err, result) => {
          if (result) {
            const token = jwt.sign({ userID: user._id }, "masai", {
              expiresIn: "7d",
            });
            
            res.status(200).send({ msg: "Login Successfull!", token});
              } else {
            res.status(200).json({ msg: "Please register first, wrong Credential" });
              }
        });
      }
    } catch (err) {
      res.status(400).json({ error: "err" });
    }
  });

module.exports={
    userRouter
}