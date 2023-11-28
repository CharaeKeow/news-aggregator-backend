import PublisherModel from '../models/publishers.model';
import { Publisher } from '../types/publisher';

class PublisherService {
	private publisherModel = new PublisherModel();

	async getAllPublishers() {
		const publishers: Publisher[] = await this.publisherModel.getPublishers();

		return publishers;
	}
}

export default PublisherService;
