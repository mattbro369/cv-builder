import { ChangeEvent, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

import { Position } from './types';
import TabComponent from './UI/tabs/TabComponent';
import DetailsInput from './UI/input/DetailsInput';
import ExperienceInput from './UI/input/Experience/ExperienceInput';
import RenderDetails from './UI/output/RenderDetails';
import RenderExperience from './UI/output/RenderExperience';
import './App.css';

function App() {
	const [detailsData, setDetailsData] = useState({
		name: 'Matthew Brown',
		email: 'matt_b1@gmail.com',
		phone: '+34 611 476 699',
		location: 'Marbella, Spain',
	});

	const [positions, setPositions] = useState<Position[]>([
		{
			company: 'Umbrella',
			title: 'Hitman',
			start: '06/1984',
			end: '08/1990',
			location: 'New York, USA',
			description: 'Handled multiple issues for clients',
			id: crypto.randomUUID(),
		},
		{
			company: 'Self employed',
			title: 'Hitman',
			start: '08/1990',
			end: 'Present day',
			location: 'New York, USA',
			description: 'Handled multiple issues for myself',
			id: crypto.randomUUID(),
		},
	]);

	const handleDetailsChange = (event: ChangeEvent<HTMLInputElement>): void => {
		const { id, value } = event.currentTarget;
		setDetailsData((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const handlePositionChange = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		id: string
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
				id: crypto.randomUUID(),
			},
		]);
	};

	const removeExperience = (id: string) => {
		setPositions((prevPositions) =>
			prevPositions.filter((position) => position.id !== id)
		);
	};

	const isSmallScreen = useMediaQuery({ query: '(max-width: 768px)' });

	return (
		<div className="min-h-screen dark bg-background text-foreground flex flex-col md:grid md:grid-cols-[80px_300px_1fr] md:grid-rows-1 ">
			<TabComponent isSmallScreen={isSmallScreen} />

			<div className="border-border border-solid border flex-1 ">
				<DetailsInput
					details={detailsData}
					handleChange={handleDetailsChange}
				/>
				<ExperienceInput
					positions={positions}
					handlePositionChange={handlePositionChange}
					removeExperience={removeExperience}
					addExperience={addExperience}
				/>
			</div>

			{/* OUTPUT */}
			<div
				className="flex bg-white text-black overflow-scroll
			">
				<RenderDetails detailsData={detailsData} />
				<br />

				<div>
					<h1>Experience</h1>
					{positions.map((position) => (
						<RenderExperience
							position={position}
							key={position.id}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
