const router = require('express').Router();

const userController = require('../controllers/userController');
// const { loginValidation, registerValidation } = require('../middlewares/userValidator');
// const { registerValidation } = require('../middlewares/userValidator');
// const loginLimiter = require('../middlewares/loginLimiter');
const verifyJWT = require('../middlewares/verifyJWT');


// router.post('/login', loginValidation, loginLimiter, userController.login);
router.post('/login', userController.login);
// router.post('/register', registerValidation, userController.register);
router.post('/register', userController.register);
router.post('/logout', userController.logout);

module.exports = router;