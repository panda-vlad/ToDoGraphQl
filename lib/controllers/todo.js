import { graphqlHTTP }  from 'express-graphql';

import todoSchema       from '../service/todo/todo';
// import ValidationError      from '../../lib/models/domainService/ValidationError';


const graphQLMiddleware = graphqlHTTP({
    schema              : todoSchema,
    graphiql            : true,
    customFormatErrorFn : (err) => {
        // err instanseof ValidationError === false
        // error.originalError instanseof ValidationError === false
        if (err.message.type) {
            return err.message.text;
        }
        if (!err.originalError) {
            return err;
        }

        return 'SERVER_ERROR';
    }
});


export default graphQLMiddleware;
