const appPort = process.env.PORT || 3000;
const dbConfig = {
    database : process.env.DB || 'base',
    username : process.env.USERNAME || 'base',
    password : process.env.PASS || 'base',
    host     : process.env.HOST || '127.0.0.1',
    port     : process.env.DBPORT || 3306,
    dialect  : process.env.DIALECT || 'mysql'
};

module.exports = {
    appPort, dbConfig
};
