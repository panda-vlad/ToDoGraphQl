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
                    const todo = await Todo.findAll();

                    return todo;
                }
            }
        };
    }
});

export default { queryType };
