import { Sequelize } from 'sequelize';
import database from './database';
import Product from '../app/model/Product';
import Department from '../app/model/Department'
const connection = new Sequelize(database);
Department.init(connection);
Product.init(connection);

Department.associate(connection.models)
Product.associate(connection.models)

export default connection;
