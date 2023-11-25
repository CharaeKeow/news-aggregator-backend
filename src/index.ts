import express from 'express';
import 'dotenv/config';

import routes from './routes/index';

const app = express();
const port = process.env.PORT || 8000;

app.use('/api', routes);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
