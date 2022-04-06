const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/hero-routes");

app.use(express.json());
app.use("/heros", router);

// app.use("/", (req, res, next) => {
//   res.send("This is our app");
// });

mongoose
  .connect(
    "mongodb+srv://admin:QAfsKPrgN66v8Wog@cluster0.kx7kn.mongodb.net/heroStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
