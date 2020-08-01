const times = {
    createdAt : '2019-10-16T14:31:16',
    updatedAt : '2019-10-16T14:32:16'
};

const todos = [
    {
        id     : 1,
        status : 'ACTIVE',
        value  : 'buy milk',
        ...times
    },
    {
        id     : 2,
        status : 'FINISHED',
        value  : 'cook supper',
        ...times
    },
    {
        id     : 3,
        status : 'ACTIVE',
        value  : 'buy tea',
        ...times
    },
    {
        id     : 4,
        status : 'ACTIVE',
        value  : 'buy tea',
        ...times
    }
];

export default {
    todos
};
