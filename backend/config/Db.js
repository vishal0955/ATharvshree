const mongoose = require("mongoose");
require("dotenv").config();
const { DB_URL } = process.env;

exports.dbConnect = () => {
    mongoose.connect(DB_URL)
    .then(() => console.log("DB Connected Successfully"))
    .catch((error) => console.log("error", error.message))
} 