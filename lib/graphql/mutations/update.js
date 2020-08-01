import { GraphQLNonNull, GraphQLString } from 'graphql';
import { todoType } from '../types/todo';

import { Todo } from '../../models';

const update = {
    type : todoType,
    args : {
        status : {
            type : new GraphQLNonNull(GraphQLString)
        },
        value : {
            type : new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        console.log('Update', params);

        console.log(3);

        return  { id: 1 };
    }

};

export default update;
