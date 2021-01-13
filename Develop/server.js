const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb+srv://lohelani:Noelani21@cluster0.qs3sv.mongodb.net/workout?retryWrites=true&w=majority", { useNewUrlParser: true });

//this is where your routes will be

app.use(require("./routes/view.js"))
//callapi.js as well

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
  });
  