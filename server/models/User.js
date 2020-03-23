const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    pseudo: {
        type: String,
        createIndex: { unique: true },
        required: 'Required pseudo'
    }
});

export const User = mongoose.model('User', userSchema);
