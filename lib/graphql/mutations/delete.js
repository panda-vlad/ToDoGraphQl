import { GraphQLNonNull, GraphQLString } from 'graphql';
import { todoType } from '../types/todo';

import { Todo } from '../../models';

const destroy = {
    type : todoType,
    args : {
        id : {
            type : new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        console.log(2222, params);

        console.log(3);

        return  { id: 1 };
    }

};

export default destroy;
