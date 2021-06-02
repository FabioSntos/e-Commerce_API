import { Sequelize } from 'sequelize';
import Model from './baseModel';

class Department extends Model {
    static init(sequelize) {
        super.init(
            {
                id: {
                    primaryKey: true,
                    type: Sequelize.INTEGER
                },
                nameDepartment: Sequelize.STRING,
                allowNull: false,

            }, 
            {
            sequelize,
            underscored: true,
            tableName: 'departments',
        },
        )
        return this
    }

}

export default Department;