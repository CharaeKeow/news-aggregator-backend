import Knex from 'knex';
import config from './knexfile';

const environment = process.env.DB_ENV || 'development';

const knex = Knex(config[environment]);

export default knex;
