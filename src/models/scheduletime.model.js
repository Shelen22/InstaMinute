const mongoose = require("mongoose");

const Events = new mongoose.Schema({
  text: { type: String, require: true },
  datetime: { type: String, require: true },
},
{
    timestamps:true,
    versionKey : false
});

module.exports = mongoose.model( "Events" , Events);
