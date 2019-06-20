const mongoose = require('mongoose');

// Our Schema
const ArcadeGameSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        enum: ['Trash', 'Okay', 'Good', 'Great', 'Amazing', 'Ratchet & Clank']
    },
    description: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        enum: ['fighting', 'sports', 'strategy', 'puzzle', 'arcade', 'platformer', 'other'],
        required: true
    }
}, {
    timestamps: true
});