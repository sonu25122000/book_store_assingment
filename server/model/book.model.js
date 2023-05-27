const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema(
  {
    book_name: { type: String, required: true },
    author_name: { type: String, required: true },
    book_image: { type: String, required: true },
    price: { type: Number, required: true },
    published: { type: Number, required: true },
  },
  { versionKey: false }
);

const BookModel = mongoose.model("book", bookSchema);

module.exports = BookModel;
