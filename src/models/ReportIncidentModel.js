const mongoose = require("mongoose");

const ReportIncidentSchema = new mongoose.Schema(
  {
    driver: {
      type: String,
      required: true,
    },
    truck: {
      type: String,
      required: true,
    },
    address: {
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

module.exports = mongoose.model("report-incident", ReportIncidentSchema);
