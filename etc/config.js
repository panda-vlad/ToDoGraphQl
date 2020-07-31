import dotenv           from 'dotenv';

dotenv.config();

const appPort = process.env.appPort || 3000;
const dbConfig = {
    database : process.env.DB || 'base',
    username : process.env.DBUSERNAME || 'base',
    password : process.env.PASS || 'base',
    host     : process.env.HOST || '127.0.0.1',
    port     : process.env.DBPORT || 3306,
    dialect  : process.env.DIALECT || 'mysql'
};

export default {
    appPort, dbConfig
};
