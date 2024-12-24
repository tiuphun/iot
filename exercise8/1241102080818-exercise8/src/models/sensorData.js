const mongoose = require('mongoose');

const sensorDataSchema = new mongoose.Schema({
    Id: { type: Number, required: true },
    SensorName: { type: String, required: true },
    SensorValue: { type: Number, required: true },
})

module.exports = mongoose.model('SensorData', sensorDataSchema);