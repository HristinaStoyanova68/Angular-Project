const mongoose = require('mongoose');
const dbConnect = require('./config/dbConfigurator');
// const { logEvents } = require('./middlewares/logger');
const routesConfigurator = require('./config/routesConfigurator');
dbConnect(app);
routesConfigurator(app);
mongoose.connection.once('open', () => {
    console.log('DB connected successfully!');
    
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));
});

mongoose.connection.on('error', err => {
    console.log(err);

    // logEvents(`${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`, 'mongoErrLog.log');
});