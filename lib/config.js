const dotenv = require('dotenv');

dotenv.config();

const appPort = process.env.appPort || 3000;

const config = {
    appPort,
    development : {
        database : process.env.DB || 'base',
        username : process.env.DBUSERNAME || 'base',
        password : process.env.PASS || 'base',
        host     : process.env.HOST || '127.0.0.1',
        port     : process.env.DBPORT || 3306,
        dialect  : process.env.DIALECT || 'mysql'
    },
    test : {
        database : process.env.DB_TEST || 'testTodo',
        username : process.env.DB_TEST_USER_NAME || 'money',
        password : process.env.DB_TEST_PASS || 'money',
        host     : process.env.HOST || '127.0.0.1',
        port     : process.env.DBPORT || 3306,
        dialect  : process.env.DIALECT || 'mysql'
    }

};


module.exports = config;
