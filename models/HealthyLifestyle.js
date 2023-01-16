const mongoose = require('mongoose');
const { Schema } = mongoose;

const healthyLifestyleSchema = new Schema({
    Lifestyle: String,
    counter: { type: Number, default: 1 },
});

mongoose.model('healthyLifestyle', healthyLifestyleSchema);
