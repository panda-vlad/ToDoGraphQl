import supertest    from 'supertest';
import { sequelize }   from '../../lib/models';
import runner       from '../../runner';
import TestFactory  from '../TestFactory';


const factory = new TestFactory();
const request = supertest.agent(runner);

global.beforeEach(async (done) => {
    await factory.cleanup();
    await factory.setDefaultTodos();

    done();
});


describe('Delete todo', () => {
    it('Positive: delete exist task', async (done) => {
        await request
            .post('/v1/todo')
            .send({
                'query'     : 'mutation {\n  destroy( id: 2) {\n    id\n    value\n  }\n}',
                'variables' : null }
            )
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({
                        'data' : {
                            'destroy' : {
                                'id'    : 2,
                                'value' : 'cook supper'
                            }
                        }
                    });
            });
        done();
    });

    it('Positive: delete not exist task', async (done) => {
        await request
            .post('/v1/todo')
            .send({
                'query'     : 'mutation {\n  destroy( id: 222222) {\n    id\n    value\n  }\n}',
                'variables' : null }
            )
            .expect('Content-Type',  /json/)
            .expect(({ body }) => {
                global.expect(body)
                    .toEqual({ errors: [ 'ENTITY_NOT_EXIST' ], data: { destroy: null } });
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

