const mongoose = require("mongoose");

const HouseElevation = mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    label: {
        type: String,
    },
    area: {
        type: Number
    },
    isDelete: {
        type: Boolean
    },
    type: {
        type:String
    }
})

module.exports = mongoose.model("HouseElevation", HouseElevation);