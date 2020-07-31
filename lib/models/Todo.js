import { DataTypes as DT } from 'sequelize';
import Base from './Base';

export default class Todo extends Base {
    static schema = {
        id     : { type: DT.INTEGER, autoIncrement: true, primaryKey: true },
        status : { type: DT.ENUM('ACTIVE', 'FINISHED'), defaultValue: 'ACTIVE' },
        value  : { type: DT.STRING }
    }

    static options = {
        timestamps : true,
        paranoid   : true
    }
}
