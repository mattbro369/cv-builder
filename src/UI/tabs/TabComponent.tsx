import { Tabs, TabsList } from '@/components/ui/tabs';
import TabButton from './TabButton';

function TabComponent({ isSmallScreen }: { isSmallScreen: boolean }) {
	return (
		<div className="navbar flex flex-col justify-start">
			<Tabs
				defaultValue="content"
				className="w-full h-full">
				<TabsList className="grid p-0 w-full grid-cols-2 h-full rounded-none md:flex md:flex-col justify-start ">
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
	);
}

export default TabComponent;
