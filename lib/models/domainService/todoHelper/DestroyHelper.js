import { Todo }  from '../../../models';
import Base      from '../Base';


export default class DestroyHelper extends Base {
    constructor({ id }) {
        super();
        this.id = id;
    }
    async destroy() {
        const todo = await this.isExistByObj({ model: Todo, obj: { id: this.id } });

        if (!todo) {
            throw new Error('TODO_NOT_EXIST');
        }
        await todo.destroy();

        return todo;
    }
}
