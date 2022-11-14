const mongoose = require("mongoose");

function errorHandler(fn) {
    return async function(req, res, next) {
        try {
            let nextCalled = false;
            const result = await fn(req, res, (params) => {
                nextCalled = true;
                next(params);
            });
            if (!res.headersSent && !nextCalled) {
                res.json(result);
            }
        } catch (e) {
            next(e);
        }
    }
}

function withTransaction(fn) {
    return async function(req, res, next) {
        let result;
        await mongoose.connection.transaction(async (session) => {
            result = await fn(req, res, session);
            return result;
        });

        return result;
    }
}

module.exports = {
    errorHandler,
    withTransaction
};