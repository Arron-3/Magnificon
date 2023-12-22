const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    // driverName: {
    //   type: String,
    //   required: true,
    // },
    email: {
      type: String,
    },
    plateNumber: {
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
