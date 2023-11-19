const MaintenanceModel = require("../models/MaintenanceModel");

const createMaintenance = async (req, res) => {
  try {
    const Maintenance = await MaintenanceModel.create(req.body);
    res.status(200).json(Maintenance);
  } catch (err) {
    console.log(err);
  }
};

const getMaintenanceById = async (req, res) => {
  try {
    const Maintenance = await MaintenanceModel.findById(req.params._id);
    res.status(200).json(Maintenance);
  } catch (err) {
    console.log(err);
  }
};

const getMaintenanceList = async (req, res, next) => {
  try {
    const Maintenance = await MaintenanceModel.find();
    res.status(200).json(Maintenance);
  } catch (err) {
    next(err);
  }
};

module.exports = { createMaintenance, getMaintenanceById, getMaintenanceList };
