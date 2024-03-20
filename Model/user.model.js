const mongoose = require("mongoose");

const userSchema= mongoose.Schema(
    {
    "name":{type:String},
    "email":{type:String},
    "password":{type:String},
    "isAdmin":{type:Boolean}
},
{
    versionKey:false,
}
)

const UserModel = mongoose.model("user",userSchema);

module.exports={
    UserModel
}