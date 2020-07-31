import express          from 'express';
import middlewares      from './lib/middlewares.js';
import router           from './lib/router.js';
import { appPort }      from './etc/config.js';

// Init app
const app = express();

app.use(middlewares.json);
app.use(middlewares.urlencoded);
app.use(middlewares.cors);

app.use('/v1', router);

let server;

if (!process.env.LAMBDA && process.env.MODE !== 'test') {
    server = app.listen(appPort, () => {
        console.log(`APP STARTING AT PORT ${appPort}`);
    });
}

process.on('SIGTERM', () => {
    console.info('SIGTERM signal received.');
    console.log('Closing app server.');
    server.close(() => {
        console.log('server closed.');
    });
});

process.on('SIGINT', () => {
    console.info('SIGINT signal received.');
    console.log('Closing http server.');
    server.close(() => {
        console.log('Http server closed.');
    });
});

export default app;
