import { GraphQLNonNull, GraphQLString } from 'graphql';
import { todoType, statusEnum }          from '../types/todo';
import { sequelize }                     from '../../models';
import AddHelper                         from '../../models/domainService/todoHelper/AddHelper';

const add = {
    type : todoType,
    args : {
        status : {
            type         : statusEnum,
            defaultValue : 'ACTIVE'
        },
        value : {
            type : new GraphQLNonNull(GraphQLString)
        }
    },
    resolve(_, params) {
        return sequelize.transaction(async () => {
            const addHelper = new AddHelper();

            addHelper.validate({ params });

            const result = await addHelper.add();

            return result;
        });
    }

};

export default add;
