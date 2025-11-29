const mongoose = require("mongoose");

const connectDB = async () => {
    await mongoose.connect("mongodb+srv://subhrajit:vTTnXxfuPLDdVeAd@nodejs.tz9nmkh.mongodb.net/devTinder");
};

module.exports = connectDB;

