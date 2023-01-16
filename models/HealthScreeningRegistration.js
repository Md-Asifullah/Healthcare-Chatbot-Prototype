const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthRegistrationSchema = new Schema({
    name: String,
    address: String,
    phone: String,
    email: String,
    symptoms: Array,
    registerDate: Date,
});

mongoose.model('health_screening_registration', healthRegistrationSchema);
