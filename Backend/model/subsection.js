const mongoose = require("mongoose");

const SubsectionSchema = new mongoose.Schema({
  title: {
    type: String,
  },
  timeduration: {
    type: String,
  },
  description: {
    type: String,
  },
  videourl: {
    type: String,
  },
});

module.exports = mongoose.model("Subsection", SubsectionSchema);
