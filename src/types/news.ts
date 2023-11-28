export type News = {
	id?: number; // optional, since only has if the news is from DB
	title: string;
	imageUrl: string;
	link: string;
	pubDate: Date;
	guid?: string; // optional, since only use during insert
	publisher: string;
};

export enum LanguageCode {
	English = 'en',
	BahasaMelayu = 'ms',
}

export type languageCodeUnion = `${LanguageCode}`;
