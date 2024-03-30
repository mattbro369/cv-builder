import { ChangeEvent, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import TabComponent from './UI/tabs/TabComponent';
import DetailsInput from './UI/input/DetailsInput';
import ExperienceInput from './UI/input/Experience/ExperienceInput';
import ExperienceForm from './UI/input/Experience/ExperienceForm';
import RenderDetails from './UI/output/RenderDetails';
import RenderExperience from './UI/output/RenderExperience';
import './App.css';

export type position = {
	company: string;
	title: string;
	// Change to dates
	start: string;
	end: string;
	location: string;
	description: string;
	id: number;
};

function App() {
	const [detailsData, setDetailsData] = useState({
		name: 'Matt',
		email: 'matt_b1@gmail.com',
		phone: '011111111',
		location: 'Tutorial hell',
	});

	const [positions, setPositions] = useState<position[]>([
		// {
		// 	company: 'Umbrella',
		// 	title: 'Hitman',
		// 	start: '06/1984',
		// 	end: '08/1990',
		// 	location: 'New York, USA',
		// 	description: 'Handled multiple issues for clients',
		// 	id: 1,
		// },
		// {
		// 	company: 'Self employed',
		// 	title: 'Hitman',
		// 	start: '08/1990',
		// 	end: 'Present day',
		// 	location: 'New York, USA',
		// 	description: 'Handled multiple issues for myself',
		// 	id: 2,
		// },
	]);

	const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const { id, value } = event.currentTarget;
		setDetailsData((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const handlePositionChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		id: number
	) => {
		const { name, value } = event.currentTarget;

		// Find the index of the position in the positions array
		const positionIndex = positions.findIndex((position) => position.id === id);

		// Create a new array to update the state immutably
		const updatedPositions = [...positions];

		// Update the specific position's property based on the input's name
		updatedPositions[positionIndex] = {
			...updatedPositions[positionIndex],
			[name]: value,
		};

		// Update the state with the new positions array
		setPositions(updatedPositions);
	};

	const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

	return (
		<div className="min-h-screen dark bg-background text-foreground flex flex-col sm:grid sm:grid-cols-[0.15fr_1fr_1fr] sm:grid-rows-1">
			<TabComponent isSmallScreen={isSmallScreen} />

			<div className="border-border border-solid border flex-1 ">
				<DetailsInput
					details={detailsData}
					handleChange={handleChange}
				/>
				<ExperienceInput>
					{positions.map((position, key) => {
						return (
							<ExperienceInput.Accordion
								key={key}
								value={`position-${key}`}
								trigger={position.company}>
								<ExperienceForm
									position={position}
									handlePositionChange={handlePositionChange}
									key={key}
								/>
							</ExperienceInput.Accordion>
						);
					})}
					<ExperienceInput.Button />
				</ExperienceInput>
			</div>

			{/* OUTPUT */}
			<div className="border-border border-solid border flex-1 flex flex-col">
				<RenderDetails detailsData={detailsData} />
				<br />

				<h1>Experience</h1>

				{positions.map((position, key) => (
					<RenderExperience
						position={position}
						key={key}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
