import express from 'express';
import 'dotenv/config';

import newsRoutes from './routes/news.route';

const app = express();
const port = process.env.PORT || 8000;

app.use('/api', newsRoutes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
