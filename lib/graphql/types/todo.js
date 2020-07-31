import { GraphQLObjectType, GraphQLNonNull,
    GraphQLID, GraphQLString  } from 'graphql';

const todoType = new GraphQLObjectType({
    name : 'todo',
    fields() {
        return {
            id : {
                type : new GraphQLNonNull(GraphQLID)
            },
            status : {
                type : GraphQLString
            },
            value : {
                type : GraphQLObjectType
            }
        };
    }
});

export default {
    todoType
};
