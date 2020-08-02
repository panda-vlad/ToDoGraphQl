

module.exports = {
    up : (queryInterface, Sequelize) => {
        return queryInterface.createTable('Todos', {
            id        : { type: Sequelize.INTEGER, autoIncrement: true, primaryKey: true },
            status    : { type: Sequelize.ENUM('ACTIVE', 'FINISHED'), defaultValue: 'ACTIVE' },
            value     : { type: Sequelize.STRING },
            createdAt : { type: Sequelize.DATE, allowNull: false },
            deletedAt : { type: Sequelize.DATE, defaultValue: null },
            updatedAt : { type: Sequelize.DATE, allowNull: false }
        },  {
            charset : 'utf8mb4'
            // collate : 'utf8_unicode_ci'
        });
    },

    down : (queryInterface) => {
        return queryInterface.dropTable('Todos');
    }
};
