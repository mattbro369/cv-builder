import { FormEvent, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import { Tabs, TabsList } from '@/components/ui/tabs';
import TabButton from './UI/tabs/TabButton';
import InputSectionComponent from './UI/input/InputSectionComponent';

function App() {
	const [detailsData, setDetailsData] = useState({
		name: 'Matt',
		email: 'matt_b1@gmail.com',
		phone: '011111111',
		location: 'Tutorial hell',
	});

	const handleChange = (event: FormEvent<HTMLInputElement>): void => {
		const { id, value } = event.currentTarget;
		setDetailsData((prevState) => ({
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
				<InputSectionComponent
					name={detailsData.name}
					email={detailsData.email}
					phone={detailsData.phone}
					location={detailsData.location}
					handleChange={handleChange}
				/>
			</div>
			<div className="border-border border-solid border flex-1 flex flex-col justify-center">
				<h1>Personal Details </h1>
				<div>
					<p>{detailsData.name}</p>
					<p>{detailsData.email}</p>
					<p>{detailsData.phone}</p>
					<p>{detailsData.location}</p>
				</div>
			</div>
		</div>
	);
}

export default App;

// {isSmallScreen ? (
// 	<TabComponent />
// ) : (
// 	<>
// 		<Button className="dark bg-background border border-solid border-border">
// 			Content
// 		</Button>
// 		<Button className="dark bg-background border border-solid border-border">
// 			Customize
// 		</Button>
// 	</>
// 	<TabComponent />
// )}
