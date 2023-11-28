import cron from 'node-cron';

const CRAWL_ARTICLES_ENDPOINT_URL =
	'http://localhost:8000/api/news/crawl-articles';
const CRAWL_ARTICLES_CRON_JOB_SCHEDULE = '0 * * * *'; // every hour

const crawlArticleJob = cron.schedule(
	CRAWL_ARTICLES_CRON_JOB_SCHEDULE,
	async () => {
		try {
			// call the parse-rss-news endpoint
			await fetch(CRAWL_ARTICLES_ENDPOINT_URL);

			console.log('RSS parsing job ran successfully');
		} catch (error) {
			console.error(error);
		}
	},
	{
		scheduled: true,
		timezone: 'Asia/Singapore',
	},
);

export default crawlArticleJob;
