const express = require("express");
const mongoose = require("mongoose");
const logger = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;


app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));


mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });

//this is where your routes will be

app.use(require("./routes/view.js"))
//callapi.js as well
app.use(require("./routes/api.js"))

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
  