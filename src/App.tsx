// import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import './App.css';
import Navbar from './UI/Navbar';
import TabComponent from './UI/Tab';

function App() {
	// const isDesktopOrLaptop = useMediaQuery({
	// 	query: '(min-width: 1224px)',
	// });
	// const isTabletOrMobile = useMediaQuery({ query: '(max-width: 768px)' });
	const isSmallScreen = useMediaQuery({ query: '(max-width: 640px)' });

	return (
		<div className="h-screen dark bg-background text-foreground flex flex-col sm:grid sm:grid-cols-[0.15fr_1fr_1fr] sm:grid-rows-1">
			<Navbar>
				<TabComponent isSmallScreen={isSmallScreen} />
			</Navbar>
			<div className="border-border border-solid border flex-1">Input</div>
			<div className="border-border border-solid border flex-1">Content</div>
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
