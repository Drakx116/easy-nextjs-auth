import alive from "../controllers/alive";

const express = require('express');
const AliveRoutes = express.Router();

AliveRoutes
    .get('/', alive );

module.exports = AliveRoutes;
