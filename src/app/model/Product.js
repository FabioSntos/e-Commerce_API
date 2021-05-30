import Sequelize, { Model } from 'sequelize';

class Product extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        descricao: Sequelize.STRING,
        preco: Sequelize.INTEGER,
        disponivel: Sequelize.INTEGER,
        destaque: Sequelize.INTEGER,
      },
      {
        sequelize,
      },
    );
    return this;
  }
}

export default Product;

/*
id: {
          type: DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true,
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        descricao: {
          type: DataTypes.STRING,
          allowNull: false,
        },
        preco: {
          type: DataTypes.DOUBLE,
          allowNull: false,
        },
        disponivel: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        destaque: {
          type: DataTypes.INTEGER,
          allowNull: false,
        },
        descricao: {
          type: DataTypes.STRING,
          allowNull: false,
        },
*/
