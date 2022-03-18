const express = require("express");
const mongoose = require("mongoose");

const app = express();

const schedulecontroller = require("./controllers/scheduletime.controller")

app.use(express.json());
app.use("/", schedulecontroller)

const start = async () => {
  await mongoose.connect(`mongodb://127.0.0.1:27017/schedule`);
  app.listen(2244, () => {
    console.log("listening on 2244");
  });
};
start();
