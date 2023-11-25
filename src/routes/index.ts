import { Router } from 'express';
import publishersRoutes from './publishers.route';
import newsRoutes from './news.route';

const router = Router();

// all routes is defined here
const routes = [
	{
		path: '/publishers',
		route: publishersRoutes,
	},
	{ path: '/news', route: newsRoutes },
];

routes.forEach((route) => {
	router.use(route.path, route.route);
});

export default router;
