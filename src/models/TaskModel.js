const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    plateNumber: {
      type: String,
    },
    straightDesign: {
      type: String,
    },
    quantity: {
      type: Number,
    },
    aggregate: {
      type: String,
    },
    maxSlump: {
      type: String,
    },
    addMixture: {
      type: String,
    },
    latitude: {
      type: Number,
    },
    longitude: {
      type: Number,
    },
    remarks: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
    taskLocation: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("tasks", TaskSchema);
