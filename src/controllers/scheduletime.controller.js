const express = require("express");

const router = express.Router();

const scheduletime = require("../models/scheduletime.model");

router.post("/", async (req, res) => {
  try {
    let match = req.body.datetime.match(
      /^(\d{4})\-(\d{2})\-(\d{2}) (\d{2}):(\d{2}):(\d{2}).(\d{3})$/
    );
    if (match) {
      const userde = await scheduletime.deleteMany({ text: req.body.text });
      const events = await scheduletime.create(req.body);

      return res.status(200).json(events);
    }
    return res.status(400).send({
      error: "datetime format should be like that : yyyy-mm-dd hh:mm:ss",
    });
  } catch (e) {
    return res.status(404).send({ message: e.message });
  }
});

router.get("/event", async (req, res) => {
  try {
    const data = await scheduletime.find({}).lean().exec();
    //    console.log('text:', text)
    return res.status(200).send(data);
  } catch (e) {
    return res.status(404).send({ message: e.message });
  }
});

module.exports = router;
