import { Sequelize } from 'sequelize';
import database from './database';
import Product from '../app/model/Product';

const connection = new Sequelize(database);

Product.init(connection);
export default connection;
