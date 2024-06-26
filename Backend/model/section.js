const mongoose = require("mongoose");

const sectionSchema = new mongoose.Schema({
    sectionname: {
        type: String
    },
    subsection: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Subsection",
        required: true
    }
});

module.exports = mongoose.model("Section", sectionSchema);
