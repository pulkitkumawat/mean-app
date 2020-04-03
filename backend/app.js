const express = require("express");
const app = express();
const mongoose = require("mongoose");
const postsRoute = require("./routes/posts");

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PATCH, PUT, DELETE, OPTIONS"
  );
  next();
});

mongoose.connect(
  "mongodb+srv://pulkit:8764012666@cluster0-ldmvn.mongodb.net/node-angular?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to db");
  }
);

app.use("/api/posts", postsRoute);

module.exports = app;
