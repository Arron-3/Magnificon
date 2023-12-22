const TruckModel = require("../models/TruckModel");

const createTruck = async (req, res) => {
  try {
    const Truck = await TruckModel.create(req.body);
    res.status(200).json(Truck);
  } catch (err) {
    console.log(err);
  }
};

const getTruckById = async (req, res) => {
  try {
    if (req.params.id === "[object Object]") {
      return null;
    }
    const Truck = await TruckModel.findById(req.params.id);
    res.status(200).json(Truck);
  } catch (err) {
    console.log(err);
  }
};

const getTruckList = async (req, res, next) => {
  try {
    const Truck = await TruckModel.find();
    res.status(200).json(Truck);
  } catch (err) {
    next(err);
  }
};

const deleteTruckById = async (req, res) => {
  try {
    const Truck = await TruckModel.findByIdAndDelete(req.params.id);
    res.status(200).json(Truck);
  } catch (err) {
    console.log(err);
  }
};

const updateTruckById = async (req, res) => {
  try {
    const truck = await TruckModel.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );
    res.status(200).json(truck);
  } catch (err) {
    console.log(err);
  }
};

const getTruckByDriverName = async (req, res) => {
  if (!req.params.driverName) {
    return console.log("No result");
  }

  try {
    const Truck = await TruckModel.findOne({
      driverName: req.params.driverName,
    });
    res.status(200).json(Truck);
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  createTruck,
  getTruckById,
  getTruckList,
  deleteTruckById,
  updateTruckById,
  getTruckByDriverName,
};
