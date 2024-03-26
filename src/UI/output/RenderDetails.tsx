type RenderDetailsProps = {
	detailsData: {
		name: string;
		email: string;
		phone: string;
		location: string;
	};
};

function RenderDetails({ detailsData }: RenderDetailsProps) {
	return (
		<>
			<h1>Personal Details </h1>
			<div>
				{Object.entries(detailsData).map((property, key) => {
					return <div key={key}>{property[1]}</div>;
				})}
				<br />
			</div>
		</>
	);
}

export default RenderDetails;
