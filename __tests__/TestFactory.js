import { Todo, sequelize }   from '../lib/models';

import { todos }  from './fixtures/seeds.js';

export default class TestFactort {
    async setDefaultTodos() {
        await Todo.bulkCreate(todos);
    }
    async cleanup() {
        try {
            await this._dropDatabase();
        } catch (error) {
            console.log('cleanupError');
            console.log(error);
            throw error;
        }
    }
    async _dropDatabase() {
        const promises = [
            'Todos'
        ].map(async (model) => {
            await sequelize.query(`TRUNCATE TABLE ${model};`);
        });

        return Promise.all(promises);
    }
}
