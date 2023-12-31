import 'dotenv/config';

type KnexConfig = {
	[key: string]: object;
};

const config: KnexConfig = {
	development: {
		client: 'pg',
		connection: {
			host: process.env.DB_DEV_HOST,
			port: process.env.DB_DEV_PORT,
			user: process.env.DB_DEV_USER,
			password: process.env.DB_DEV_PASSWORD,
			database: process.env.DB_DEV_NAME,
		},
		migrations: {
			directory: './database/migrations',
		},
		seeds: {
			directory: './database/seeds',
		},
	},
	production: {
		client: 'pg',
		connection: process.env.DB_PROD_URL, // or can use the same pattern as dev
		migrations: {
			directory: './database/migrations',
		},
		seeds: {
			directory: './database/seeds',
		},
	},
};

export default config;
