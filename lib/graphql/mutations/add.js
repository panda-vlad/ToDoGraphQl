import { GraphQLNonNull, GraphQLString } from 'graphql';
import { todoType } from '../types/todo';

import Todo from '../../models/Todo';

const add = {
    type : todoType,
    args : {
        status : {
            type : new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        console.log(2222, params);

        console.log(3);

        return  { id: 1 };
    }

};

export default add;
