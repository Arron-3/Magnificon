const ReportIncidentModel = require("../models/ReportIncidentModel");

const createReportIncident = async (req, res) => {
  try {
    const ReportIncident = await ReportIncidentModel.create(req.body);
    res.status(200).json(ReportIncident);
  } catch (err) {
    console.log(err);
  }
};

const getReportIncidentById = async (req, res) => {
  try {
    const ReportIncident = await ReportIncidentModel.findById(req.params._id);
    res.status(200).json(ReportIncident);
  } catch (err) {
    console.log(err);
  }
};

const getReportIncidentList = async (req, res, next) => {
  try {
    const ReportIncident = await ReportIncidentModel.find();
    res.status(200).json(ReportIncident);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createReportIncident,
  getReportIncidentById,
  getReportIncidentList,
};
