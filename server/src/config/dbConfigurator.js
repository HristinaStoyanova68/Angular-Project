require('dotenv').config();
const mongoose = require('mongoose');

const initializeCollections = require('../utils/initializeCollections');

// const uri = process.env.MONGO_URI;
const uri = 'mongodb+srv://hristinastoyanova1968:7OCSkAlMELWGfyR6@delicious-to-you-db.0ygcfyb.mongodb.net/recipesDB?retryWrites=true&w=majority&appName=delicious-to-you-DB';

async function dbConnect() {
    try {
        await mongoose.connect(uri);

        initializeCollections();

    } catch (err) {
        console.error(`DB Error: ${err}`);
        console.error(err.message);
        process.exit(1);
    }
}

module.exports = dbConnect;