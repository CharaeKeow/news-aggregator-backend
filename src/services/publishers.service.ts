import PublisherModel from '../models/publishers.model';
import { Publisher } from '../types/publisher';

class PublisherService {
	private publisher = new PublisherModel();

	async getAllPublishers() {
		const publishers: Publisher[] = await this.publisher.getPublishers();

		return publishers;
	}
}

export default PublisherService;
