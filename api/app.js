const express = require("express");
const mongoose = require("mongoose");
const app = express();
const router = require("./routes/hero-routes");
const cors=require('cors');
//
const multer = require('multer');
//

app.use(express.json());
app.use(cors());
app.use("/heros", router);
//
app.use(express.static('public'));
//

/////
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, 'public')
  },
  filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname)
  }
});

const upload = multer({storage}).array('file');

app.post('/upload', (req, res) => {
  upload(req, res, (err) => {
      if (err) {
          return res.status(500).json(err)
      }
      return res.status(200).send(req.files)
  })
});
/////


mongoose
  .connect(
    "mongodb+srv://admin:QAfsKPrgN66v8Wog@cluster0.kx7kn.mongodb.net/heroStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to DB"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));
