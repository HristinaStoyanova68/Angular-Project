const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    medSpeciality: {
        type: String,
    },
    appointments: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'Appoinmtent',
        }
    ]
});

const Doctor = mongoose.model('Doctor', doctorSchema);

module.exports = Doctor;