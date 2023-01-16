const mongoose = require('mongoose');
const { Schema } = mongoose;

const medicinesSchema = new Schema({
    name: String,
    description: String,
});

mongoose.model('medicines', medicinesSchema);
