const { Schema, model } = require("mongoose");

const schoolSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  students: { type: Number },
  location: { lat: { type: String }, long: { type: String } },
  urlImg: { type: String },
});

const School = new model("School", schoolSchema);

module.exports = School;
