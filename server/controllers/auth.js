const jwt = require('jsonwebtoken');
const ENV = require('dotenv').config().parsed;

export const login = (req, res) => {
    // Update with users db request
    const pseudo = 'test-pseudo';
    if(!pseudo) {
        return res.status(400).json({
            'message': 'Missing params'
        });
    }

    const token = jwt.sign({
            'pseudo': 'pseudo'
        },
        `${ ENV.JWT_SECRET }`,
        { expiresIn: 1200 }
    );

    res.status(200).json({
        'token': token,
    })
};
