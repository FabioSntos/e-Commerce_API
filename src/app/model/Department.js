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
                

            }, 
            {
            sequelize,
            underscored: true,
            tableName: 'departments',
        },
        )
        return this
    }
    
    static associate(models){
        Department.hasMany(models.Product, { foreignKey: 'id_dep'})
      }

}

export default Department;