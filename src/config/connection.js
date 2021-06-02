import { Sequelize } from 'sequelize';
import database from './database';
import Product from '../app/model/Product';
import Department from '../app/model/Department'
const connection = new Sequelize(database);

Product.init(connection);
Department.init(connection);
export default connection;
