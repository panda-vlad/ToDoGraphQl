

module.exports = {
    up : (queryInterface, Sequelize) => {
        return queryInterface.createTable('Todos', {
            id        : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            status    : { type: Sequelize.ENUM('ACTIVE', 'FINISHED'), defaultValue: 'ACTIVE' },
            value     : { type: Sequelize.STRING },
            createdAt : { type: Sequelize.DATE, allowNull: false },
            updatedAt : { type: Sequelize.DATE, allowNull: false }
        }, { logging: console.log });
    },

    down : (queryInterface) => {
        return queryInterface.dropTable('Todos');
    }
};
