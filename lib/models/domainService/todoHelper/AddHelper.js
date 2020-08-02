
import { Todo }      from '../../../models';
import TodoValidator from './Validator';
import Base          from '../Base';

export default class AddHelper extends Base {
    constructor() {
        super();
        this.data = null;
        this.validator = new TodoValidator();
    }

    validate({ params }) {
        const { status, value } = params;


        const statusErrors = this.validator.validateStatus({ status });
        const valueErrors = this.validator.validateValue({ value, minLength: 0, maxLength: 255 });

        const errors = {
            ...statusErrors,
            ...valueErrors
        };

        this.checkValidationErrors({ errors });
        this._setData({ status, value });
    }

    async add() {
        const todo = await Todo.create(this.data);


        return todo;
    }

    _setData(data) {
        this.data = data;
    }
}
