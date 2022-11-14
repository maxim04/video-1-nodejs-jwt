const express = require('express');
const router = express.Router();
const authRouter = require('./auth');
const usersRouter = require('./users');

router.use('/auth', authRouter);
router.use('/users', usersRouter);

module.exports = router;