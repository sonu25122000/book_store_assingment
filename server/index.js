const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { connecion } = require("./config/db");
const app = express();
app.use(express.json());
app.use(cors());


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
