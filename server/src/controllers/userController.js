const asyncHandler = require('express-async-handler');
const {validationResult} = require('express-validator');
const bcrypt = require('bcrypt');

const User = require('../models/User');
const { accessTokenGenerator } = require('../utils/tokenGenerator');

// @desc Sign in existing user
// @route POST /login
// @access Public

const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const {errors} = validationResult(req);

    if (errors.length !== 0) {
        return res.status(400).json({ message: errors[0].msg });
    }

    

    const user = await User.findOne({ email }).populate('myRecipes');

    if (!user) {
        return res.status(401).json({ message: 'Unauthorized: Invalid email or password!' });
    }

    const isValidPassword = await bcrypt.compare(password, user.password);

    if (!isValidPassword) {
        return res.status(401).json({ message: 'Unauthorized: Invalid email or password!' });
    }

    const accessToken = await accessTokenGenerator(user);

    res.setHeader('Authorization', `Bearer ${accessToken}`);

    //TODO remove password from userData !!!
    const userData = {
        id: user._id,
        username: user.username,
        email: user.email,
        password: user.password, 
        accessToken,
    };

    res.status(200).json(userData);
});

// @desc Register new user
// @route POST users/register
// @access Private

const register = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;
    const {errors} = validationResult(req);

    if (errors.length !== 0) {
        return res.status(400).json({ message: errors[0].msg });
    }

    const emailExists = await User.findOne({ email }).lean();

    if (emailExists) {
        return res.status(409).json({ message: 'User with the same email already exists!' });
    }

    const createUser = await User.create({ username, email, password });

    if (!createUser) {
        return res.status(400).json({ message: 'Inavlid user data received!' });
    }

    const token = await accessTokenGenerator(createUser);

    const userData = {
        id: createUser._id,
        username: createUser.username,
        email: createUser.email,
        password: createUser.password,
        token
    };

    res.status(201).json(userData);
});

// @desc Logout an user
// @route POST /logout
// @access Public

const logout = (req, res) => {
    res.removeHeader('Authorization');

    res.json({message: 'Successfully logged out!'});
};

module.exports = {
    login,
    register,
    logout,
};