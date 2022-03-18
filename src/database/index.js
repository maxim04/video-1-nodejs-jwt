const mongoose = require('mongoose');
const logger = require("../logger");
mongoose.Promise = global.Promise;

async function connectToDatabase() {
    try {
        const user = process.env.DB_USER;
        const password = process.env.DB_PASS;
        const host = process.env.DB_HOST;
        const port = process.env.DB_PORT;
        const dbName = process.env.DB_NAME;
        const rs = process.env.DB_REPLICA_SET;

        const connectionString = `mongodb://${user}:${password}@${host}:${port}/${dbName}?replicaSet=${rs}`;
        await mongoose.connect(connectionString, {
            serverSelectionTimeoutMS: 5000
        });
        logger.info('Connected to database');
    } catch (e) {
        logger.error(e);
    }
}

module.exports = connectToDatabase;