import config  from './config';
import initModels from './models/initModels';

const {
    database, username, password, dialect, host, port
} = config[process.env.MODE || 'development'];

const {
    Todo,
    Op,
    dbName,
    sequelize }
     = initModels({
         database,
         username,
         password,
         dialect,
         host,
         port
     });

export {
    Todo,
    Op,
    dbName,
    sequelize
};
