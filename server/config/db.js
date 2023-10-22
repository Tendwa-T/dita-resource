const mongoose = require('mongoose');
const uri = process.env.MONGO_URI;

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true});
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`MONGODB ERROR: ${error.message}`);
        process.exit(0);
    }
}
module.exports = connectDB;