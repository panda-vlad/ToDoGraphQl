import supertest    from 'supertest';
import { sequelize }   from '../../lib/models';
import runner       from '../../testRunner';

import TestFactory  from '../TestFactory';


const factory = new TestFactory();
const request = supertest.agent(runner);


global.beforeEach(async (done) => {
    await factory.cleanup();

    await factory.setDefaultTodos();
    done();
});


describe('Query test', () => {
    it('Query with id only', async () => {
        return request
            .get('/v1/todo')
            .send({
                query     : '{\n  todo {\n    id\n  }\n}',
                variables : {}
            })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ 'data': { 'todo': [ { 'id': 1 }, { 'id': 2 }, { 'id': 3 }, { 'id': 4 } ] } });
            });
    });

    it('Query with value only', () => {
        return request
            .get('/v1/todo')
            .send({
                query     : '{\n  todo {\n    value\n  }\n}',
                variables : {}
            })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ 'data': { 'todo': [ { 'value': 'buy milk' }, { 'value': 'cook supper' }, { 'value': 'buy tea' }, { 'value': 'buy tea' } ] } });
            });
    });

    it('Query with status only', () => {
        return request
            .get('/v1/todo')
            .send({
                query     : '{\n  todo {\n    status\n  }\n}',
                variables : {}
            })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ 'data': { 'todo': [ { 'status': 'ACTIVE' }, { 'status': 'FINISHED' }, { 'status': 'ACTIVE' }, { 'status': 'ACTIVE' } ] } });
            });
    });

    it('Query with only', () => {
        return request
            .get('/v1/todo')
            .send({
                query     : '{\n  todo {\n    value\n    id\n    status\n  }\n}',
                variables : {}
            })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ 'data' : { 'todo' : [ { 'value': 'buy milk', 'id': 1, 'status': 'ACTIVE' },
                        { 'value': 'cook supper', 'id': 2, 'status': 'FINISHED' },
                        { 'value': 'buy tea', 'id': 3, 'status': 'ACTIVE' },
                        { 'value': 'buy tea', 'id': 4, 'status': 'ACTIVE' } ] } });
            });
    });
});


describe('Negative: Query test', () => {
    it('Query with wrong field', () => {
        return request
            .get('/v1/todo')
            .send({
                query     : '{\n  todo {\n    WRONG\n  }\n}',
                variables : {}
            })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ 'errors' : [ {
                        'message'   : 'Cannot query field "WRONG" on type "todo".',
                        'locations' : [ { 'line': 3, 'column': 5 } ]
                    } ] });
            });
    });
});


global.afterAll(async () => {
    try {
        await factory.cleanup();
        await sequelize.close();
    } catch (e) {
        console.error(e);
        throw e;
    }
});
