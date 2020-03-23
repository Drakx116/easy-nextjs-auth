const jwt = require('jsonwebtoken');
const ENV = require('dotenv').config().parsed;

const { User } = require('../models/User');

export const login = (req, res) => {
    const pseudo = req.body.pseudo;

    if(!pseudo) {
        return res.status(406).json({ 'error': 'Missing params.' });
    }

    User.findOne({ 'pseudo': pseudo }, (error, user) => {
        if(!user) {
            return res.status(404).json({ 'error': 'Cannot find any related user.' });
        }

        const token = jwt.sign({ 'pseudo': user.pseudo, id: user.id }, `${ ENV.JWT_SECRET }`, { expiresIn: 1200 });

        res.status(200).json({
            'data': {
                'user': {
                    'id': user.id,
                    'pseudo': user.pseudo
                },
                'token': token,
            }
        });
    });
};
