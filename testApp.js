import express          from 'express';
import middlewares      from './lib/middlewares.js';
import router           from './lib/router.js';

// Init app
const app = express();


app.use(middlewares.json);
app.use(middlewares.urlencoded);
app.use(middlewares.cors);

app.use('/v1', router);

export default app;
