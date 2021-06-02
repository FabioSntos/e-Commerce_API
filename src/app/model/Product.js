import { Sequelize } from 'sequelize';
import Model from './baseModel';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        id: {
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        name: Sequelize.STRING,
        descricao: Sequelize.STRING,
        preco: Sequelize.INTEGER,
        disponivel: Sequelize.INTEGER,
        destaque: Sequelize.INTEGER,
        
      },
      {
        sequelize,
        underscored: true,
        tableName: 'products',
      },
    );
    return this;
  }
}

export default Product;
