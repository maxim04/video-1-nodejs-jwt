const express = require('express');
const controllers = require("../controllers");
const router = express.Router();

router.post('/signup', controllers.auth.signup);
router.post('/login', controllers.auth.login);
router.post('/logout', controllers.auth.logout);
router.post('/logoutAll', controllers.auth.logoutAll);
router.post('/accessToken', controllers.auth.newAccessToken);
router.post('/refreshToken', controllers.auth.newRefreshToken);

module.exports = router;