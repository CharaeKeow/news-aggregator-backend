import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('language', (table) => {
		table.increments('id').primary();
		table.string('language_code');
		table.string('language_name');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('language');
}
