const homeRouter = require('../routes/homeRoutes');
const patientRouter = require('../routes/patientRouter');
const appointmentRouter = require('../routes/appointmentRouter');
const errorHandler = require('../middlewares/errorHandler');

module.exports = (app) => {
    app.use(homeRouter);
    app.use('/patients', patientRouter);
    app.use('/schedule', appointmentRouter);
    app.use(errorHandler);
}