import { GraphQLNonNull, GraphQLString,
    GraphQLInt }                         from 'graphql';
import { todoType, statusEnum }          from '../types/todo';
import UpdateHelper                      from '../../models/domainService/todoHelper/UpdateHelper';
import { sequelize }                     from '../../models';

const update = {
    type : todoType,
    args : {
        status : {
            type : statusEnum
        },
        value : {
            type : new GraphQLNonNull(GraphQLString)
        },
        id : {
            name : 'id',
            type : new GraphQLNonNull(GraphQLInt)
        }
    },
    async resolve(_, params) {
        return sequelize.transaction(async () => {
            const updateHelper = new UpdateHelper();

            updateHelper.validate({ params });

            const result = await updateHelper.update();

            return result;
        });
    }

};

export default update;
