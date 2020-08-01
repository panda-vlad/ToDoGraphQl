import { GraphQLObjectType,
    GraphQLList } from 'graphql';
import { Todo }       from '../../models';
import { todoType }   from '../types/todo';

// Query
const queryType = new GraphQLObjectType({
    name : 'Query',
    fields() {
        return {
            todo : {
                type : new GraphQLList(todoType),
                async resolve(params) {
                    console.log('TODO', Todo, params);

                    const users = await Todo.findAll();

                    console.log('list', users);
                    if (!users) {
                        throw new Error('Error');
                    }

                    return [ { id: 2, status: 'ACTIVE' } ];
                }
            }
        };
    }
});

export default { queryType };
