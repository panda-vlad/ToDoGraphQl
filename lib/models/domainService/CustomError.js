import { GraphQLError  } from 'graphql';

export default class ValidationError extends GraphQLError {
    constructor(message) {
        super(message);
        this.message = { text: message, type: 'CustomError' };
    }
}
