const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/hero-routes");
const cors=require('cors');


app.use(express.json());
app.use(cors());
app.use("/heros", router);


mongoose
  .connect(
    "mongodb+srv://admin:QAfsKPrgN66v8Wog@cluster0.kx7kn.mongodb.net/heroStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
