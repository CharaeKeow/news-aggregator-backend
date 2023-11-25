import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('publisher', (table) => {
		table.increments('id').primary();
		table.string('name');
		table.string('feed_url');
		table.integer('language_id');
		table.timestamp('created_at').defaultTo(knex.fn.now());

		table.foreign('language_id').references('language.id');
	});
}

export async function down(knex: Knex): Promise<void> {
	return knex.schema.dropTable('publisher');
}
