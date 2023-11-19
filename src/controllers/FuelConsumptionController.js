const FuelConsumptionModel = require("../models/FuelConsumptionModel");

const createFuelConsumption = async (req, res) => {
  try {
    const FuelConsumption = await FuelConsumptionModel.create(req.body);
    res.status(200).json(FuelConsumption);
  } catch (err) {
    console.log(err);
  }
};

const getFuelConsumptionById = async (req, res) => {
  try {
    const FuelConsumption = await FuelConsumptionModel.findById(req.params._id);
    res.status(200).json(FuelConsumption);
  } catch (err) {
    console.log(err);
  }
};

const getFuelConsumptionList = async (req, res, next) => {
  try {
    const FuelConsumption = await FuelConsumptionModel.find();
    res.status(200).json(FuelConsumption);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createFuelConsumption,
  getFuelConsumptionById,
  getFuelConsumptionList,
};
