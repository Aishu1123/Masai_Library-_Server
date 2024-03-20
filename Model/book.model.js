const mongoose = require("mongoose");

const bookSchema= mongoose.Schema(
    {
    "title":{type:String},
    "author":{type:String},
    "category":{type:String},
    "price":{type:Number},
    "quantity":{type:Number}
},
{
    versionKey:false,
}
)

const BookModel = mongoose.model("book",bookSchemaSchema);

module.exports={
    BookModel
}