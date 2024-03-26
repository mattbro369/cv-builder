import { ChangeEvent, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import { Tabs, TabsList } from '@/components/ui/tabs';
import TabButton from './UI/tabs/TabButton';
import DetailsInput from './UI/input/DetailsInput';
import RenderExperience from './UI/output/RenderExperience';
import ExperienceInput from './UI/input/ExperienceInput';
import RenderDetails from './UI/output/RenderDetails';
import { position } from './data';

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
			id: 1,
		},
		{
			company: 'Self employed',
			title: 'Hitman',
			start: '08/1990',
			end: 'Present day',
			location: 'New York, USA',
			description: 'Handled multiple issues for myself',
			id: 2,
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
			<div className="navbar flex flex-col justify-start">
				<Tabs
					defaultValue="content"
					className="w-full h-full">
					<TabsList className="grid w-full grid-cols-2 h-full rounded-none sm:flex sm:flex-col justify-start ">
						<TabButton
							value="content"
							isSmallScreen={isSmallScreen}
						/>
						<TabButton
							value="styles"
							isSmallScreen={isSmallScreen}
						/>
					</TabsList>
				</Tabs>
			</div>

			<div className="border-border border-solid border flex-1 ">
				<DetailsInput
					details={detailsData}
					handleChange={handleChange}
				/>

				<ExperienceInput
					handlePositionChange={handlePositionChange}
					positions={positions}
				/>
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
