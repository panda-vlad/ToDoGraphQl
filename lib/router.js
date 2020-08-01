import express      from 'express';
import controllers  from './controllers';
import { graphqlHTTP }  from 'express-graphql';

const router = express.Router();


router.use('/todo', (req, res) => {
    graphqlHTTP({
        schema              : controllers.todoSchema,
        graphiql            : true,
        customFormatErrorFn : (err) => {
            return err;
        }
    })(req, res);
});

export default router;
