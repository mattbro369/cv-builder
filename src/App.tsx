import { FormEvent, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import { Tabs, TabsList } from '@/components/ui/tabs';
import TabButton from './UI/tabs/TabButton';
import InputSection from './UI/input/InputSection';
import RenderExperience from './UI/output/RenderExperience';

export type position = {
	company: string;
	title: string;
	// Change to dates
	start: string;
	end: string;
	location: string;
	description: string;
};

const positions_arr: position[] = [
	// {
	// 	company: 'Umbrella',
	// 	title: 'Hitman',
	// 	start: '06/1984',
	// 	end: '08/1990',
	// 	location: 'New York, USA',
	// 	description: 'Handled multiple issues for clients',
	// },
	// {
	// 	company: 'Self employed',
	// 	title: 'Hitman',
	// 	start: '08/1990',
	// 	end: 'Present day',
	// 	location: 'New York, USA',
	// 	description: 'Handled multiple issues for myself',
	// },
];

function App() {
	const [detailsData, setDetailsData] = useState({
		name: 'Matt',
		email: 'matt_b1@gmail.com',
		phone: '011111111',
		location: 'Tutorial hell',
	});

	const [expData, setExpData] = useState({
		company: '',
		title: '',
		start: '',
		end: '',
		location: '',
		description: '',
	});

	const handleChange = (event: FormEvent<HTMLInputElement>): void => {
		const { id, value } = event.currentTarget;
		setDetailsData((prevState) => ({
			...prevState,
			[id]: value,
		}));
	};

	const handleExpChange = (event: FormEvent<HTMLInputElement>): void => {
		const { id, value } = event.currentTarget;
		setExpData((prevState) => ({
			...prevState,
			[id]: value,
		}));
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
				<InputSection
					name={detailsData.name}
					email={detailsData.email}
					phone={detailsData.phone}
					location={detailsData.location}
					handleChange={handleChange}
					positions_arr={positions_arr}
				/>
			</div>

			{/* OUTPUT */}
			<div className="border-border border-solid border flex-1 flex flex-col justify-center">
				<h1>Personal Details </h1>
				<div>
					{Object.entries(detailsData).map(([key, value]) => {
						return <p key={key}>{value}</p>;
					})}
				</div>
				<br />
				<h1>Experience</h1>

				{positions_arr.map((position) => (
					<RenderExperience
						position={position}
						key={positions_arr.indexOf(position)}
					/>
				))}
			</div>
		</div>
	);
}

export default App;
