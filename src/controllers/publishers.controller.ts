import { Request, Response } from 'express';

import PublisherModel from '../models/publishers.model';
import { Publisher } from '../types/publisher';

class PublisherController {
	async getPublisher(req: Request, res: Response) {
		try {
			const publisher = new PublisherModel();

			const publishers: Publisher[] = await publisher.getPublishers();

			res.status(200).send({ publishers });
		} catch (error) {
			console.error(error);
			res.status(500).send({ message: 'Error getting publisher' });
		}
	}
}

export default new PublisherController();
