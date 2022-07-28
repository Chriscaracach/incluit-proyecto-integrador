const { Schema, model } = require("mongoose");

const schoolSchema = new Schema({
  name: { type: String, required: true },
  address: { type: String, required: true },
  students: { type: String },
  location: [{ lat: { type: String }, long: { type: String } }],
});

const School = new model("School", schoolSchema);

module.exports = School;