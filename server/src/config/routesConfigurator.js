const homeRouter = require('../routes/homeRoutes');
const userRouter = require('../routes/userRoutes');
const recipesRouter = require('../routes/recipesRoutes');
const errorHandler = require('../middlewares/errorHandler');

module.exports = (app) => {
    app.use(homeRouter);
    app.use('/users', userRouter);
    app.use('/recipes', recipesRouter);
    app.use(errorHandler);
}