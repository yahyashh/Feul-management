const mongoose = require('mongoose');

const wehicalSchema = new mongoose.Schema({
  vehicleName: {
    type: String,
    required: true,
  },
  vehicleType: {
    type: String,
    required: true,
  },
  plateNumber: {
    type: String,
    required: true,
  },
  // ... other wehical fields
});

const Wehical = mongoose.model('Wehical', wehicalSchema);

module.exports = Wehical;
