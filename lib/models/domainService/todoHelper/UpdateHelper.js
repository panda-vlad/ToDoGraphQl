import { Todo }      from '../../../models';
import TodoValidator from './Validator';
import Base          from '../Base';

export default class UpdateHelper extends Base {
    constructor() {
        super();
        this.data = null;
        this.validator = new TodoValidator();
    }

    validate({ params }) {
        const { status, value, id } = params;


        const statusErrors = this.validator.validateStatus({ status });
        const valueErrors = this.validator.validateValue({ value, minLength: 5, maxLength: 255 });
        const errors = {
            ...statusErrors,
            ...valueErrors
        };

        this.checkValidationErrors({ errors });

        this._setData({ status, value, id });
    }
    async update() {
        const { id } = this.data;
        const todo = await this.isExistByObj({ model: Todo, obj: { id } });

        const update = await todo.update(this.data);

        return update;
    }
    _setData(data) {
        this.data = data;
    }
}

