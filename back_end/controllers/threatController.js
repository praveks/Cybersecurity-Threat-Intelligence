const Threat = require('../models/Threat');
const axios = require('axios');

exports.createThreat = async (req, res) => {
  try {
    const {
      ipAddress,
      domain,
      url,
      fileHash,
      threatLevel,
      category
    } = req.body;

    let inputToCheck = url || domain || ipAddress;
    let isMalicious = false;

    if (inputToCheck) {
      try {
        const response = await axios.post('http://localhost:5001/predict', {
          input: inputToCheck
        });
        isMalicious = response.data.prediction === 'malicious';
      } catch (err) {
        console.error('Error calling ML API:', err.message);  
      }
    }

    const newThreat = new Threat({
      ipAddress,
      domain,
      url,
      fileHash,
      threatLevel,
      category,
      isMalicious
    });

    const savedThreat = await newThreat.save();
    res.status(201).json(savedThreat);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server Error' });
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
    const updated = await Threat.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.deleteThreat = async (req, res) => {
  try {
    await Threat.findByIdAndDelete(req.params.id);
    res.json({ message: 'Threat deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
