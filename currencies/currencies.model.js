const mongoose = require('mongoose');
const currencySchema = new mongoose.Schema({
    MonneyCode: {
        type: String,
        required: true,
    },
    Name: {
        type: String,
        required: true,
    },
    Rate: {
        type: Number,
        required: true,
    },
});

const Currency = mongoose.model("Currency", currencySchema);

module.exports = Currency;