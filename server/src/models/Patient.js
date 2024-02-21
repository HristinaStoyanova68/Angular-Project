const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const patientSchema = new mongoose.Schema({
    email: {
        type: String,
    },
    username: {
        type: String,
        unique: true,
    },    
    password: {
        type: String,
    },
    appointments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Appoinmtent',
        }
    ]
});

patientSchema.virtual('rePassword')
    .set(function (value) {
        if (value !== this.password) {
            throw new Error('Passwords don\'t match!');
        }
    });

    patientSchema.pre('save', async function () {
    const hash = await bcrypt.hash(this.password, 10);

    this.password = hash;
});

const Patient = mongoose.model('User', patientSchema);

module.exports = Patient;