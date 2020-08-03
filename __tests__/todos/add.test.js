import supertest    from 'supertest';
import { sequelize }   from '../../lib/models';
import runner       from '../../testRunner';

import TestFactory  from '../TestFactory';

const factory = new TestFactory();
const request = supertest.agent(runner);

global.beforeEach(async (done) => {
    await factory.cleanup();
    done();
});


describe('Positive: add new todo', () => {
    it('Positive: add valid todo', async (done) => {
        await request
            .post('/v1/todo')
            .send({
                'query'     : 'mutation {\n  add(value: "33") {\n    id\n    value\n  }\n}',
                'variables' : null
            })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ data: { add: { id: 1, value: '33' } } });
            });
        done();
    });

    it('Negative: add too long value', async (done) => {
        const longSring = 'I_WILL_BE_LONG'.repeat(30);

        await request
            .post('/v1/todo')
            .send({
                'query'     : `mutation {\n  add(value: "${longSring}") {\n    id\n    value\n  }\n}`,
                'variables' : null
            })
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ errors: [ '{"value":"TOO_HIGH"}' ], data: { add: null } });
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
