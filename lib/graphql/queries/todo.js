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
                async resolve() {
                    console.log('TODO', Todo);

                    const users = await Todo.findAll();

                    console.log('list', users);
                    if (!users) {
                        throw new Error('Error');
                    }

                    return;
                }
            }
        };
    }
});

export default { queryType };
