const mongoose = require("mongoose");

module.exports = () => {
    return mongoose.connect("mongodb+srv://ravikumar:ravipatel@cluster0.epwey.mongodb.net/tripadvisor_database?retryWrites=true&w=majority");
};
