const express = require("express");
const { BookModel } = require("../Model/book.model");

const bookRouter = express.Router();

// Add new Book
bookRouter.post('/books',async (req,res)=> {
  const { title, author, category, price, quantity} = req.body;
    try{
         const newBook = new BookModel({title, author, category, price, quantity})
        await newBook.save();
         res.status(201).send({msg:"new book is added"})
    } 
    catch(err) {
        res.status(400).send({err})
    }
})

// Get All Books
bookRouter.get('/books',async (req,res)=> {
    try{
      const books = await BookModel.find();
      res.status(200).send({msg:"list of all books",books})
    } 
    catch(err) {
        res.status(400).send({err})
    }
})

// Get Book By ID

bookRouter.get("/books/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const book = await BookModel.findById({ _id: id });
      res.status(200).json({ mgs: book });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  //   Update Book by ID
  bookRouter.put("/books/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const book = await BookModel.findByIdAndUpdate({ _id: id }, req.body);
      res.status(204).json({ mgs: "Details of Book is updated." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });


  // Delete Book by ID
bookRouter.delete("/books/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const book = await BookModel.findByIdAndDelete({ _id: id });
      res.status(204).json({ mgs: "Details of Book is updated." });
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });


module.exports={
    bookRouter
}