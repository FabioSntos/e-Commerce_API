const { DataTypes } = require('sequelize');

class Product {
  static init(sequelize) {
    super.init(
      {
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
      },
      {
        sequelize,
        underscored: true,
        tableName: 'products',
      },
    );
  }
}

module.exports = Product;
