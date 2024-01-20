const mongoose = require("mongoose");

const TruckSchema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    driverName: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    plateNumber: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("trucks", TruckSchema);
