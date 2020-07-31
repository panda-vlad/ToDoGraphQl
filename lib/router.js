import express      from 'express';
import controllers  from './controllers';
import { graphqlHTTP }  from 'express-graphql';


const router = express.Router();

router.get('/todo', graphqlHTTP({
    schema    : controllers.todoSchema,
    rootValue : global,
    graphiql  : true
}));

export default router;
