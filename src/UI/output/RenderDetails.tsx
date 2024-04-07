import { PersonalDetails } from '@/types';

type RenderDetailsProps = {
	detailsData: PersonalDetails;
};

function RenderDetails({ detailsData }: RenderDetailsProps) {
	return (
		<div className="bg-sky-700 flex flex-col w-full justify-center items-center min-w-[768px]">
			<div>
				<h1>{detailsData.name}</h1>
			</div>
			<div className="flex w-full">
				<div className="flex flex-1 justify-evenly">
					{Object.entries(detailsData)
						.slice(1)
						.map((property, index) => {
							return (
								<p key={index}>
									{property[0]}: {property[1]}
								</p>
							);
						})}
				</div>
			</div>
		</div>
	);
}

export default RenderDetails;

{
	/* <div>
				{Object.entries(detailsData).map((property) => {
					return <div key={property[0]}>{property[1]}</div>;
				})}
				<br />
			</div> */
}
