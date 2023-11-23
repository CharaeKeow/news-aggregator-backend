import { Request, Response } from 'express';

const getNews = async (req: Request, res: Response) => {
	try {
		res.status(200).send({ message: 'Hello news!' });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: 'Error getting news' });
	}
};

export { getNews };
