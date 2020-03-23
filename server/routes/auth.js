const express = require('express');
const auth = express.Router();

const { login } = require('../controllers/auth');

auth
    .get( '/login', login );

module.exports = login;
