import * as config from 'src/config/db.json';
import { Sequelize } from 'sequelize';

export const db = new Sequelize(config.db, config.user, config.password, {
  ...config.connection,
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

