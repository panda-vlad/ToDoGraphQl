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


describe('Update status', () => {
    it('Negative: update status to FINISHED for not exist', async (done) => {
        await request
            .post('/v1/todo')
            .send({ 'query'     : 'mutation {\n  update(value: "tes5t" id: 28888 status: FINISHED) {\n    id\n    value\n  }\n}',
                'variables' : null })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ errors: [ 'ENTITY_NOT_EXIST' ], data: { update: null } });
            });
        done();
    });

    it('Positive: update status to FINISHED', async (done) => {
        await request
            .post('/v1/todo')
            .send({ 'query'     : 'mutation {\n  update( id: 1 status: FINISHED, value: "222222") {\n    id\n    value\n \n status  }\n}',
                'variables' : null })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ 'data': { 'update': { 'id': 1, 'value': '222222', 'status': 'FINISHED' } } });
            });
        done();
    });

    it('Negative: update status to WRONG', async (done) => {
        await request
            .post('/v1/todo')
            .send({ 'query'     : 'mutation {\n  update( id: 1 status: WRONG, value: "222222") {\n    id\n    value\n \n status  }\n}',
                'variables' : null })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({
                        errors : [
                            {
                                message   : 'Value "WRONG" does not exist in "StatusEnum" enum.',
                                locations : [ { column: 25, line: 2 }  ]
                            }
                        ]
                    });
            });
        done();
    });
});


global.afterAll(async (done) => {
    try {
        await factory.cleanup();
        await sequelize.close();
        done();
    } catch (e) {
        console.error(e);
        throw e;
    }
});
