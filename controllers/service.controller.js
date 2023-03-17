const Service = require("../models/service.model");

exports.createService = async (req, res) => {
  try {
    const serviceData = req.body;
    const service = new Service(serviceData);
    await service.save();
    res.status(201).json({
      status: "success",
      message: "Data inserted successfully",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Data not inserted",
      error: error.message,
    });
  }
};

exports.getAllServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json({
      status: "success",
      data: services,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.getOneService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    const service = await Service.findById(serviceId);
    res.status(200).json({
      status: "success",
      data: service,
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};

exports.deleteOneService = async (req, res) => {
  try {
    const serviceId = req.params.id;
    await Service.findByIdAndDelete(serviceId);
    res.status(200).json({
      status: "success",
      message: "Service deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      status: "fail",
      message: "Can't get the data",
      error: error.message,
    });
  }
};
