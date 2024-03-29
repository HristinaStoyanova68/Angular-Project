const router = require('express').Router();

const userController = require('../controllers/userController');
const { loginValidation, registerValidation } = require('../middlewares/userValidator');
const loginLimiter = require('../middlewares/loginLimiter');
const verifyJWT = require('../middlewares/verifyJWT');


router.post('/login', loginValidation, loginLimiter, userController.login);
router.post('/register', registerValidation, userController.register);
router.post('/logout', verifyJWT, userController.logout);

module.exports = router;