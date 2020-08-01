import { dbConfig } from '../etc/config';
import initModels from './models/initModels';

const {
    database, username, password, dialect, host, port
} = dbConfig[process.env.MODE];

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
