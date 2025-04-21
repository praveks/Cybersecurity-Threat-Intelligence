const Threat = require("../models/Threat");
const axios = require("axios");

exports.createThreat = async (req, res) => {
  try {
    const { ipAddress, domain, url, fileHash, threatLevel, category } =
      req.body;

    let inputToCheck = [url, domain, ipAddress ,category];
    let isMalicious = false;

    for (let input of inputToCheck) {
      if (input) {
        try {
          const response = await axios.post("http://ml-api:5001/predict", {
            input: input
          });
          if (response.data.prediction === "malicious") {
            isMalicious = true;
            break;
          }
        } catch (error) {
          console.log("Error calling ML API:", error.message);
        }
      }
    }

    const newThreat = new Threat({
      ipAddress,
      domain,
      url,
      fileHash,
      threatLevel,
      category,
      isMalicious,
    });

    const savedThreat = await newThreat.save();
    res.status(201).json(savedThreat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server Error" });
  }
};

exports.getThreats = async (req, res) => {
  try {
    const threats = await Threat.find();
    res.json(threats);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateThreat = async (req, res) => {
  try {
    const updated = await Threat.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteThreat = async (req, res) => {
  try {
    await Threat.findByIdAndDelete(req.params.id);
    res.json({ message: "Threat deleted" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
