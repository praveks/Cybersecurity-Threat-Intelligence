const express = require('express');
const router = express.Router();
const {
  createThreat,
  getThreats,
  updateThreat,
  deleteThreat
} = require('../controllers/threatController');
const auth = require('../middleware/auth');

router.get('/', getThreats);
router.post('/', auth, createThreat);
router.put('/:id', auth, updateThreat);
router.delete('/:id', auth, deleteThreat);

module.exports = router;
