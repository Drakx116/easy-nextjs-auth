const ENV = require('dotenv').config().parsed;
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const handlers = require('./middlewares/handlers');
const routes = require('./routes');

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.use('/', routes.alive );

app.use(handlers.notFound);
app.use(handlers.error);

app.listen(`${ ENV.PORT }`,
    () => console.log(`Server is running on http://${ ENV.HOST }:${ ENV.PORT }`)
);
