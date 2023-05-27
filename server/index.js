const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connecion } = require("./config/db");
const { bookRouter } = require("./route/book.route");
const userRouter = require("./route/user.route");
const app = express();
app.use(express.json());
app.use(cors());

app.use("/user", userRouter);
app.use("/book",bookRouter)

app.get("/",(req,res)=>{
  res.send("home page")
})
app.listen(process.env.port, async () => {
  try {
    await connecion;
    console.log("connected to DB");
  } catch (err) {
    console.log("server error");
  }
  console.log(`server is running at port ${process.env.port}`);
});
