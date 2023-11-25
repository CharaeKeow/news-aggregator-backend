import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
	// Deletes ALL existing entries
	await knex('language').del();

	// Inserts seed entries
	await knex('language').insert([
		{ id: 1, language_code: 'BM', language_name: 'Bahasa Malaysia' },
		{ id: 2, language_code: 'EN', language_name: 'English' },
	]);

	await knex('publisher').del();

	await knex('publisher').insert([
		{
			id: 1,
			name: 'Utusan Malaysia',
			feed_url: 'https://www.utusan.com.my/feed/',
			language_id: 1,
		},
		{
			id: 2,
			name: 'Berita Harian',
			feed_url: 'https://bharian.com.my/terkini.xml',
			language_id: 1,
		},
		{
			id: 3,
			name: 'SAYS',
			feed_url: 'https://says.com/my/rss',
			language_id: 2,
		},
	]);
}
