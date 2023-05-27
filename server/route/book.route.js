const express = require("express");
const BookModel = require("../model/book.model");
const { auth } = require("../middleware/auth.middleware");

const bookRouter = express.Router();

// get route for book
bookRouter.get("/", async (req, res) => {
  try {
    let data = await BookModel.find();
    res.send(data);
  } catch (err) {
    res.send({
      msg: "somthing went wrong! cannot Get book Details",
      error: err.message,
    });
  }
});

// add book route

bookRouter.post("/add", async (req, res) => {
  console.log(req.body);
  try {
    const data = new BookModel(req.body);
    await data.save();
    res.send({ msg: "Book has been added successfully" });
  } catch (err) {
    res.send({
      msg: "somthing went wrong! cannot add the Book",
      error: err.message,
    });
  }
});

//SEARCH
bookRouter.get("/search", async (req, res) => {
  const { q } = req.query;
  try {
    const products = await BookModel.find({
      book_name: { $regex: new RegExp(q, "i") },
    });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

//GET book  BY ID
bookRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const products = await BookModel.findOne({ _id: id });
    res.status(200).send(products);
  } catch (error) {
    res.status(400).send({ msg: error });
  }
});

module.exports = { bookRouter };
