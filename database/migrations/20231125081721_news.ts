import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
	return knex.schema.createTable('news', (table) => {
		table.increments('id').primary();
		table.string('title').notNullable();
		table.text('image_url');
		table.text('link');
		table.timestamp('pub_date');
		table.string('guid').notNullable();
		table.integer('publisher_id').notNullable();
		table.timestamp('created_at').defaultTo(knex.fn.now());

		table.foreign('publisher_id').references('publisher.id');

		// Composite unique constrants on `publisher_id` and `guid`
		table.unique(['publisher_id', 'guid']);
	});
}

export async function down(knex: Knex): Promise<void> {}
