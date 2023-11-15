
const express = require('express');
const {
    login, logout, register
} = require('../auth/auth')
const router = express.Router();



router.post('/register', register);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;