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

const getMaintenanceCount = async (req, res) => {
  try {
    const filter = req.params.filter.toLowerCase();
    const currentDate = new Date();

    let pipeline;

    switch (filter) {
      case "today":
        const startOfDay = new Date(currentDate);
        startOfDay.setHours(0, 0, 0, 0);

        pipeline = [
          {
            $match: {
              createdAt: { $gte: startOfDay, $lt: currentDate },
            },
          },
          {
            $group: {
              _id: null,
              numberOfData: { $sum: 1 },
            },
          },
        ];
        break;

      case "daily":
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay() + 1); // Adjust to Monday
        startOfWeek.setHours(0, 0, 0, 0);

        const endOfWeek = new Date(startOfWeek);
        endOfWeek.setDate(startOfWeek.getDate() + 6); // Sunday

        pipeline = [
          {
            $match: {
              createdAt: { $gte: startOfWeek, $lt: endOfWeek },
            },
          },
          {
            $group: {
              _id: null,
              numberOfData: { $sum: 1 },
            },
          },
        ];
        break;

      case "monthly":
        pipeline = [
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
        ];
        break;

      default:
        return res.status(400).json({ error: "Invalid filter" });
    }

    const result = await MaintenanceModel.aggregate(pipeline);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createMaintenance,
  getMaintenanceById,
  getMaintenanceList,
  getMaintenanceCount,
};
