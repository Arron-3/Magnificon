const PreventiveMaintenance = require("../models/PreventiveMaintenance");

const createPreventiveMaintenance = async (req, res) => {
  try {
    const Maintenance = await PreventiveMaintenance.create(req.body);
    res.status(200).json(Maintenance);
  } catch (err) {
    console.log(err);
  }
};

const getPreventiveMaintenanceById = async (req, res) => {
  try {
    const Maintenance = await PreventiveMaintenance.findById(req.params._id);
    res.status(200).json(Maintenance);
  } catch (err) {
    console.log(err);
  }
};

const getPreventiveMaintenanceList = async (req, res, next) => {
  try {
    const Maintenance = await PreventiveMaintenance.find();
    res.status(200).json(Maintenance);
  } catch (err) {
    next(err);
  }
};

const getPreventiveMaintenanceCountPerMonth = async (req, res, next) => {
  try {
    const maintenanceCountPerMonth = await PreventiveMaintenance.aggregate([
      {
        $group: {
          _id: {
            year: { $year: "$createdAt" },
            month: { $month: "$createdAt" },
          },
          numberOfData: { $sum: 1 },
        },
      },
      {
        $sort: { "_id.year": 1, "_id.month": 1 },
      },
    ]);

    res.status(200).json(maintenanceCountPerMonth);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createPreventiveMaintenance,
  getPreventiveMaintenanceById,
  getPreventiveMaintenanceList,
  getPreventiveMaintenanceCountPerMonth,
};
