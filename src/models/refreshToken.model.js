const mongoose = require('mongoose');
const { Schema, model} = mongoose;

const refreshTokenSchema = new Schema({
    owner: {type: Schema.Types.ObjectId, ref: 'User'}
});

const RefreshToken = model('RefreshToken', refreshTokenSchema);

module.exports = RefreshToken;