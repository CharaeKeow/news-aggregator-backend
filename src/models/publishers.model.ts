import knex from '../../database/connection';

class PublisherModel {
	async getPublishers() {
		return knex
			.select(
				'p.id',
				'name',
				'feed_url as feedUrl',
				'language_code as languageCode',
				'language_name as languageName',
			)
			.from('publisher as p')
			.innerJoin('language as l', 'l.id', 'p.language_id');
	}
}

export default PublisherModel;
