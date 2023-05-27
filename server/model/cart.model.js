const mongoose = require("mongoose");
const cartProductsSchema = mongoose.Schema(
  {
    userID: String,
    bookID: { type: mongoose.Schema.Types.ObjectId, ref: "book" },
    qty: Number,
  },
  {
    versionKey: false,
  }
);

const CartProductsModel = mongoose.model("cartProducts", cartProductsSchema);

module.exports = { CartProductsModel };
