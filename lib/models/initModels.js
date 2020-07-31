import cls                      from 'cls-hooked';
import Sequelize                from 'sequelize';

import Todo from './Todo';

Sequelize.useCLS(cls.createNamespace('sequelize-transactions-namespace'));

export default function initAllModels(config) {
    const { database, username, password, dialect, host, port } = config;

    const sequelize = new Sequelize(database, username, password, { host,
        port,
        dialect,
        logging : false,
        define  : {
            charset : 'utf8',
            collate : 'utf8_general_ci'
        } });

    const models = {
        Todo
    };

    // sequelize.sync({ force: true }).then(result => {
    //     console.log(result);
    // }).catch(err => console.log(err));

    Object.values(models).forEach(model => model.init(sequelize));
    Object.values(models).forEach(model => model.initRelationsAndHooks(sequelize));


    return {
        ...models,
        sequelize,
        Op     : Sequelize.Op,
        dbName : database
    };
}
