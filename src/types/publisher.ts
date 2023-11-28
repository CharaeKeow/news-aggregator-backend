export type Publisher = {
	id: number;
	name: string;
	feedUrl: string;
	languageCode: string;
	languageName: string;
};

// publisher name, as per DB
export enum PublisherName {
	UtusanMalaysia = 'Utusan Malaysia',
	BeritaHarian = 'Berita Harian',
	Says = 'SAYS',
}
