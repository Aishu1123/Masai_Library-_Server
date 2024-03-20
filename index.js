const express = require("express");
const { connection } = require("./Config/db");
const { userRouter } = require("./Routes/user.route");
const { bookRouter } = require("./Routes/book.route");
const { orderRouter } = require("./Routes/order.route");
require("dotenv").config();

const app = express();

app.use(express.json());



app.use("/api" ,userRouter);
app.use("/api" ,bookRouter);
app.use("/api" ,orderRouter);

// app.use("/",(req,res)=>{
//     res.send("Welcome to Masai Library")
// })

app.listen(process.env.port , async()=>{
    try{
         await connection;
         console.log("masaiLibrary Database is connected")
         console.log(`server is connected at http://localhost:${process.env.port}`)
    }catch(err){
      console.log(err);
    }
})