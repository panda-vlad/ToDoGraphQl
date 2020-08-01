export default class Base {
    async isExistByObj({ model, obj }) {
        return model.findOne({ where: obj });
    }
}
