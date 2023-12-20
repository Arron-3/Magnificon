const mongoose = require("mongoose");

const PreventiveMaintenance = new mongoose.Schema(
  {
    driver: {
      type: String,
      required: true,
    },
    profiler: {
      type: Boolean,
      required: true,
    },
    oil: {
      type: Boolean,
      required: true,
    },
    cleanInsides: {
      type: Boolean,
      required: true,
    },
    brakes: {
      type: Boolean,
      required: true,
    },
    buldrumBearing: {
      type: Boolean,
      required: true,
    },
    coolant: {
      type: Boolean,
      required: true,
    },
    tirePressure: {
      type: Boolean,
      required: true,
    },
    filters: {
      type: Boolean,
      required: true,
    },
    fluids: {
      type: Boolean,
      required: true,
    },
    blinkerLights: {
      type: Boolean,
      required: true,
    },
    allLights: {
      type: Boolean,
      required: true,
    },
    battery: {
      type: Boolean,
      required: true,
    },
    truck: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "preventive-maintenance",
  PreventiveMaintenance
);
