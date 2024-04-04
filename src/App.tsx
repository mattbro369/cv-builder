import { ChangeEvent, MouseEventHandler, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import TabComponent from './UI/tabs/TabComponent';
import DetailsInput from './UI/input/DetailsInput';
import ExperienceInput from './UI/input/Experience/ExperienceInput';
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
	id?: number;
};

function App() {
	const [detailsData, setDetailsData] = useState({
		name: 'Matt',
		email: 'matt_b1@gmail.com',
		phone: '011111111',
		location: 'Tutorial hell',
	});

	const [positions, setPositions] = useState<position[]>([
		{
			company: 'Umbrella',
			title: 'Hitman',
			start: '06/1984',
			end: '08/1990',
			location: 'New York, USA',
			description: 'Handled multiple issues for clients',
			// id: 1,
		},
		{
			company: 'Self employed',
			title: 'Hitman',
			start: '08/1990',
			end: 'Present day',
			location: 'New York, USA',
			description: 'Handled multiple issues for myself',
			// id: 2,
		},
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
		id: number | undefined
	) => {
		const { name, value } = event.currentTarget;
		const positionIndex = positions.findIndex((position) => position.id === id);
		const updatedPositions = [...positions];
		updatedPositions[positionIndex] = {
			...updatedPositions[positionIndex],
			[name]: value,
		};
		setPositions(updatedPositions);
	};

	const addExperience = () => {
		setPositions([
			...positions,
			{
				company: '',
				title: '',
				start: '',
				end: '',
				location: '',
				description: '',
				id: positions.length + 1, // Assigning a id of the last element in positions
			},
		]);
		console.log(positions);
	};

	const removeExperience = () => {
		console.log('remove');
	};

	const reindexPositions = () => {
		// Logic
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
								trigger={
									position.company === ''
										? 'New Position*'
										: `${position.company}`
								}>
								<ExperienceInput.Form
									position={position}
									handlePositionChange={handlePositionChange}
									key={key}
								/>

								<ExperienceInput.Button
									handleClick={removeExperience}
									style="flex justify-end">
									Remove
								</ExperienceInput.Button>
							</ExperienceInput.Accordion>
						);
					})}
					<ExperienceInput.Button handleClick={addExperience}>
						Add
					</ExperienceInput.Button>
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
