import { Request, Response } from 'express';

import PublisherService from '../services/publishers.service';

class PublisherController {
	async getPublishers(req: Request, res: Response) {
		try {
			const publisherService = new PublisherService();
			const publishers = await publisherService.getAllPublishers();

			res.status(200).send({ publishers });
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: 'Error getting publisher' });
		}
	}
}

export default new PublisherController();
