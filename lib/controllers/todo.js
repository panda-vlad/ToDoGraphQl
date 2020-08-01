import { GraphQLSchema,
    GraphQLObjectType } from 'graphql';
import { queryType }    from '../graphql/queries/todo';
import mutation         from '../graphql/mutations/index';


const todoSchema = new GraphQLSchema({
    query    : queryType,
    mutation : new GraphQLObjectType({
        name   : 'Mutation',
        fields : mutation
    })
});


export default todoSchema;
