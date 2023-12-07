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

const getReportIncidentCount = async (req, res) => {
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

    const result = await ReportIncidentModel.aggregate(pipeline);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  createReportIncident,
  getReportIncidentById,
  getReportIncidentList,
  getReportIncidentCount,
};
