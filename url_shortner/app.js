const express = require("express");
const { connectDB } = require("./connection");

const urlRoute = require("./routes/url");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB("mongodb://localhost:27017/url_shortner")
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB", err);
  });

  

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.use("/url", urlRoute);

console.log("Starting URL Shortener Application...");
