const asyncHandler = require('express-async-handler');

const Collection = require('../models/Collection');

const initializeCollections = asyncHandler(async () => {
    const existingCollections = await Collection.find();

    if (existingCollections.length === 0) {
        await Collection.create([
            { name: 'Salads' },
            { name: 'Main Course' },
            { name: 'Desserts' },
        ]);
    }
});

module.exports = initializeCollections;