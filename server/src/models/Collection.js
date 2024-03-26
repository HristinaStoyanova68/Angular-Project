const mongoose = require('mongoose');

const Recipe = require('./Recipe');

const collectionSchema = new mongoose.Schema({
    name: {
        type: String,
        enum: ['Salads', 'Main Course', 'Desserts'],
        default: 'Main Course',
    },
    recipes: [
        {
            type: mongoose.Types.ObjectId,
            ref: Recipe,
        }
    ]
});

const Collection = mongoose.model('Collection', collectionSchema);

module.exports = Collection;