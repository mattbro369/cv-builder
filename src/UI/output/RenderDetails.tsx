import { ReactNode } from 'react';

import { EnvelopeIcon, PhoneIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { Separator } from '@/components/ui/separator';
import { PersonalDetails } from '@/types';

type RenderDetailsProps = {
	detailsData: PersonalDetails;
};

type ContactDetailsProps = {
	detailItems: DetailItem[];
};

type DetailItem = {
	icon: ReactNode;
	value: string;
};

function RenderDetails({ detailsData }: RenderDetailsProps) {
	const detailItems = [
		{
			icon: <EnvelopeIcon className="h-4 " />,
			value: detailsData.email,
		},
		{
			icon: <PhoneIcon className="h-4 " />,
			value: detailsData.phone,
		},
		{
			icon: <MapPinIcon className="h-4 " />,
			value: detailsData.location,
		},
	];

	return (
		<div className="bg-sky-900 flex flex-col justify-start items-center text-white p-3">
			<div>
				<h1 className="font-semibold text-3xl">{detailsData.name}</h1>
			</div>
			<Separator
				className="my-1 bg-slate-400"
				decorative={true}
			/>
			<ContactDetails detailItems={detailItems} />
		</div>
	);
}

function ContactDetails({ detailItems }: ContactDetailsProps) {
	return (
		<div className="flex w-full">
			<div className="flex flex-col flex-1 justify-evenly">
				{detailItems.map((item, index) => {
					return (
						<div key={index}>
							<span className="flex items-center gap-2">
								{item.icon}
								{item.value}
							</span>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default RenderDetails;
