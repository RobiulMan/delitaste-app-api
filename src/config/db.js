const path = require('path');
require('dotenv').config({ path: path.join(__dirname, 'config.env') });
const mongoose = require('mongoose');

// Mongoose Configer
const dbConnection = async () => {
    const config = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    try {
        await mongoose.connect(process.env.MONGODB_URI, config);
        console.log('Mongodb is connected');
    } catch (err) {
        console.log(err.message);
    }
};

module.exports = dbConnection;
