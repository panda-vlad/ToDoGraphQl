import { GraphQLNonNull, GraphQLInt } from 'graphql';
import { todoType }                   from '../types/todo';
import DestroyHelper                  from '../../models/domainService/todoHelper/DestroyHelper';
import { sequelize }                     from '../../models';

const destroy = {
    type : todoType,
    args : {
        id : {
            type : new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(_, params) {
        return sequelize.transaction(async () => {
            const destroyHelper = new DestroyHelper(params);

            const todo = await destroyHelper.destroy();

            return  todo;
        });
    }

};

export default destroy;
