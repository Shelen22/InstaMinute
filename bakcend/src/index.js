const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');

const app = express();

const port = process.env.PORT || 2244

const schedulecontroller = require("./controllers/scheduletime.controller")

app.use(express.json());
app.use(cors());

app.use("/", schedulecontroller)

const start = async () => {
  await mongoose.connect(`mongodb+srv://shailendra:shailendra22@cluster0.djbfv.mongodb.net/eventschedular`);
  app.listen(port, () => {
    console.log("listening on 2244");
  });
};
start();
