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

/* <TabsTrigger
					value="content"
					className="sm:w-20">
					<div className="flex flex-col items-center gap-1">
						{!isSmallScreen && <PencilIcon className="h-6" />}
						<p className="text-sm">Content</p>
					</div>
				</TabsTrigger>
				<TabsTrigger
					value="styles"
					className="sm:w-20">
					<div className="flex flex-col items-center gap-1">
						{!isSmallScreen && <SparklesIcon className="h-6" />}
						<p className="text-sm">Styles</p>
					</div>
				</TabsTrigger> */
