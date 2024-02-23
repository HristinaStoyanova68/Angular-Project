const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');

const Patient = require('../models/Patient');
const { accessTokenGenerator, refreshTokenGenerator } = require('../utils/tokenGenerator');
// const { validationResult } = require('express-validator');

// @desc Sign in existing patient
// @route POST /login
// @access Public

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    // const { errors } = validationResult(req);

    // if (errors.length) {
    //     res.status(400);
    //     throw new Error(errors.map(err => err.msg));
    // }

    if (!email) {
        return res.status(400).json({ message: 'Email is required!' });
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required!' });
    }

    const patient = await Patient.findOne({ email }).populate('appointments');

    if (!patient) {
        return res.status(401).json({ message: 'Unauthorized: Invalid email or password!' });
    }

    const isValidPassword = await bcrypt.compare(password, patient.password);

    if (!isValidPassword) {
        return res.status(401).json({ message: 'Unauthorized: Invalid email or password!' });
    }

    const accessToken = await accessTokenGenerator(patient);
    const refreshToken = await refreshTokenGenerator(patient);

    res.cookie('jwt', refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: 'None',
        maxAge: 7 * 24 * 60 * 60 * 1000
    });

    // Have to check if it is necessary to make this userData object or to send only the accessToken
    
    const patientData = {
        id: patient._id,
        username: patient.username,
        email: patient.email,
        accessToken,
    };

    res.status(200).json(patientData);
});

// @desc Register new patient
// @route POST patients/register
// @access Private

const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    if (!username) {
        return res.status(400).json({ message: 'Username is required!' });
    }

    if (!email) {
        return res.status(400).json({ message: 'Email is required!' });
    }

    if (!password) {
        return res.status(400).json({ message: 'Password is required!' });
    }

    const usernameExists = await Patient.findOne({ username }).lean();

    if (usernameExists) {
        return res.status(409).json({ message: 'Username already exists!' });
    }

    const createPatient = await Patient.create({ username, email, password });

    if (!createPatient) {
        return res.status(400).json({ message: 'Inavlid user data received!' });
    }

    const token = await accessTokenGenerator(createPatient);

    const patientData = {
        id: createPatient._id,
        username: createPatient.username,
        email: createPatient.email,
        token
    };

    res.status(201).json(patientData);
});

// @desc Logout an patient
// @route POST /logout
// @access Public

const logout = (req, res) => {
    const cookies = req.cookies;

    if (!cookies?.jwt) {
        return res.sendStatus(204);
    }

    req.user = {};

    res.clearCookie('jwt', {
        httpOnly: true,
        sameSite: 'None',
        secure: true
    });

    res.json({
        message: 'Cookie cleared',
        success: 'Successfully logged out!'
    });
};

module.exports = {
    login,
    register,
    logout,
};