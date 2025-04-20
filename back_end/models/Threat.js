const mongoose = require('mongoose');

const threatSchema = new mongoose.Schema({
  ipAddress: String,
  domain: String,
  url: String,
  fileHash: String,
  threatLevel: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical','Severe'],
    default: 'Low'
  },
  category: {
    type: String,
    enum: ['URL', 'Malware', 'Botnet', 'Phishing','Ransomware'],
    required: true
  },
  isMalicious: {
    type: Boolean,
    default:false
  }
}, { timestamps: true });

module.exports = mongoose.model('Threat', threatSchema);
