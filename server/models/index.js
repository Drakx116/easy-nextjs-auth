const mongoose = require('mongoose');
const ENV = require('dotenv').config().parsed;

const connect = (req, res, next) => {
    mongoose.connect(`${ ENV.DB_CONNECTION_STRING }`, { useNewUrlParser: true, useUnifiedTopology: true })
        .then( ()  => next() )
        .catch( () => { return res.status(500).json({ 'message': 'Error while accessing the database.' }) }  );
};

module.exports = connect;
