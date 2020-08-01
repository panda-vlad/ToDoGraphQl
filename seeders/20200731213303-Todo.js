module.exports = {
    up : (queryInterface) => {
        return queryInterface.bulkInsert('Todos', [ {
            status    : 'ACTIVE',
            value     : 'buy milk',
            createdAt : '2019-10-16T14:3:16',
            updatedAt : '2019-10-16T14:32:16'
        },
        {
            status    : 'ACTIVE',
            value     : 'buy tea',
            createdAt : '2019-10-16T14:3:16',
            updatedAt : '2019-10-16T14:32:16'
        },
        {
            status    : 'ACTIVE',
            value     : 'visit doctor',
            createdAt : '2019-10-16T14:3:16',
            updatedAt : '2019-10-16T14:32:16'
        }
        ], {});
    },

    down : (queryInterface) => {
        return queryInterface.bulkDelete('Todos', null, {});
    }
};
