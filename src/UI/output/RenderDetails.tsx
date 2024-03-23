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
				<p>{detailsData.name}</p>
				<p>{detailsData.email}</p>
				<p>{detailsData.phone}</p>
				<p>{detailsData.location}</p>
				<br />
			</div>
		</>
	);
}

export default RenderDetails;
