import Sequelize from 'sequelize';
import database from './database';

const connection = new Sequelize(database);

export default connection;
