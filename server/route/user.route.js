const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { auth } = require("../middleware/auth.middleware");
const UserModel = require("../model/user.model");
const { CartProductsModel } = require("../model/cart.model");

const userRouter = express.Router();
// signup
userRouter.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const user = await UserModel.find({ email });
  if (user.length <= 0) {
    try {
      bcrypt.hash(password, 5, async (err, hash) => {
        if (err) {
          res.send({ msg: "Something went Wrong", error: err.message });
        } else {
          const user = new UserModel({
            name,
            email,
            password: hash,
          });
          await user.save();
          res.send({ msg: "New user has been registered" });
        }
      });
    } catch (error) {
      res.send({ msg: "Something went Wrong", error: error.message });
    }
  } else {
    res.send({ msg: "User already exist, please login" });
  }
});

// login
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    if (user) {
      bcrypt.compare(password, user.password, async (err, result) => {
        if (result) {
          let token = jwt.sign({ userID: user._id }, "sonu");
          await UserModel.findByIdAndUpdate(
            { _id: user._id },
            { is_active: true }
          );
          res.send({ msg: "Login Successfull", token: token });
        } else {
          res.send({ msg: "Wrong Credentials" });
        }
      });
    } else {
      res.send({ msg: "User not found!" });
    }
  } catch (err) {
    res.send({ msg: "somthing went wrong! cannot login", error: err.message });
  }
});

module.exports = userRouter;