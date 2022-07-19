const express = require('express');
const router = express.Router();
const authController = require('../controller/auth-controller');

router.post('/auth/register', authController.registerUser);

router.post('/auth/login', authController.loginUser);

router.get('/auth/logout/:username', authController.logoutUser);

module.exports = router;
