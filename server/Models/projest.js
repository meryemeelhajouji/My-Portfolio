const mongoose = require("mongoose");

const Project = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  technologie: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
  link: {
    type: String,
  },
  image: {
    type: String,
  },
});
const project = mongoose.model("project", Project);
module.exports = project;
