const express = require("express");
const colors=require("colors");
const dotenv=require("dotenv").config();
const morgan = require("morgan");
const rootroute = require("./routes/rootroute");
const { connect } = require("mongoose");
const db = require("../config/DB")

const PORT = process.env.PORT || 6000||8080;
const app = express();
connectDB();
app.get("/",(req,res) => {
    res.send("api is working");
});

app.use("\ fashiontrends",root);

app.listen(PORT, () => {
    console.log(`sever is running`)
});

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgYellow.white);
  });