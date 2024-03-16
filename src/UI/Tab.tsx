import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PencilIcon } from '@heroicons/react/24/solid';
import { SparklesIcon } from '@heroicons/react/24/solid';

function TabComponent({ isSmallScreen }: { isSmallScreen: boolean }) {
	return (
		<Tabs
			defaultValue="content"
			className="w-full h-full">
			<TabsList className="grid w-full grid-cols-2 h-full rounded-none sm:flex sm:flex-col justify-start ">
				<TabsTrigger
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
				</TabsTrigger>
			</TabsList>
			<TabsContent value="content"></TabsContent>
			<TabsContent value="styles"></TabsContent>
		</Tabs>
	);
}

export default TabComponent;
