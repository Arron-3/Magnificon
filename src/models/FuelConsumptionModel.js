const mongoose = require("mongoose");

const FuelConsumptionSchema = new mongoose.Schema(
  {
    driver: {
      type: String,
      required: true,
    },
    truck: {
      type: String,
      required: true,
    },
    gasStation: {
      type: String,
      required: true,
    },
    liter: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
    startOdometer: {
      type: String,
      required: true,
    },
    endOdometer: {
      type: String,
      required: true,
    },
    receiptImage: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("fuel-consumption", FuelConsumptionSchema);
