import { GraphQLNonNull, GraphQLString } from 'graphql';
import { userType } from '../types/todo';

import Todo from '../../models/Todo';

const add = {
    type : userType,
    args : {
        name : {
            type : new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(root, params) {
        const uModel = new Todo(params);
        const newUser = uModel.save();

        if (!newUser) {
            throw new Error('Error');
        }

        return newUser;
    }

};

export default add;
