import { GraphQLObjectType,
    GraphQLList } from 'graphql';
import Todo       from '../../models/Todo';
import { todoType }   from '../types/todo';

// Query
const queryType = new GraphQLObjectType({
    name : 'Query',
    fields() {
        return {
            users : {
                type : new GraphQLList(todoType),
                resolve() {
                    const users = Todo.findAll();

                    if (!users) {
                        throw new Error('Error');
                    }

                    return users;
                }
            }
        };
    }
});

export default { queryType };
