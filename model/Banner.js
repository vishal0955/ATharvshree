const mongoose = require("mongoose");

const Banner = new mongoose.Schema({
    imageUrl: {
        type: String,
        required: true,
    },
    isImage : {
        type: Boolean
    },
    current: {
        type: Boolean
    },
    isDelete: {
        type: Boolean
    }
})

module.exports = mongoose.model("Banner", Banner);