import ValidationError     from './ValidationError';
import CustomError         from './CustomError';
export default class Base {
    async isExistByObj({ model, obj }) {
        const entity = await model.findOne({ where: obj });

        if (!entity) {
            throw new CustomError('ENTITY_NOT_EXIST');
        }

        return entity;
    }

    checkValidationErrors({ errors }) {
        if (Object.keys(errors).length) {
            throw new ValidationError(JSON.stringify(errors));
        }
    }
}
