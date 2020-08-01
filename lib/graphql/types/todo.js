import { GraphQLObjectType, GraphQLNonNull,
    GraphQLID, GraphQLString, GraphQLEnumType  } from 'graphql';

const statusEnum = new GraphQLEnumType({
    name   : 'StatusEnum',
    values : {
        ACTIVE : {
            value : 'ACTIVE'
        },
        FINISHED : {
            value : 'FINISHED'
        }
    }
});

const todoType = new GraphQLObjectType({
    name : 'todo',
    fields() {
        return {
            id : {
                type : new GraphQLNonNull(GraphQLID)
            },
            status : {
                type         : new GraphQLNonNull(statusEnum),
                defaultValue : 'ACTIVE'
            },
            value : {
                type : GraphQLString
            }
        };
    }
});

export default {
    todoType, statusEnum
};
