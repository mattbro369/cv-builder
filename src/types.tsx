type PersonalDetails = {
	name: string;
	email: string;
	phone: string;
	location: string;
};

type Position = {
	company: string;
	title: string;
	start: string;
	end: string;
	location: string;
	description: string;
	id: string;
};

export type { PersonalDetails, Position };
