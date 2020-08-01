import express      from 'express';
import controllers  from './controllers';
import { graphqlHTTP }  from 'express-graphql';
import { getErrorCode } from '../utils/helpers';

const router = express.Router();

router.use('/todo', graphqlHTTP({
    schema    : controllers.todoSchema,
    rootValue : global,
    graphiql  : true

}));


router.use('/todo', (req, res) => {
    graphqlHTTP({
        schema      : controllers.todoSchema,
        graphiql    : true,
        formatError : (err) => {
            const error = getErrorCode(err.message);


            return ({ message: error.message, statusCode: error.statusCode });
        }
    })(req, res);
});

export default router;
