const mongoose = require("mongoose");

const MaintenanceSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    schedule: {
      type: String,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("maintenances", MaintenanceSchema);
