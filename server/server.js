const ENV = require('dotenv').config().parsed;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const handlers = require('./middlewares/handlers');

const app = express();
const port = 5000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use(handlers.notFound);
app.use(handlers.error);

app.listen(port,
    () => console.log(`Server is running on http://${ ENV.HOST }:${ ENV.PORT }`)
);