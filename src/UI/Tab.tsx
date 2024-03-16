import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { PencilIcon } from '@heroicons/react/24/solid';
import { SparklesIcon } from '@heroicons/react/24/solid';

function TabComponent({ isSmallScreen }: { isSmallScreen: boolean }) {
	return (
		<Tabs
			defaultValue="content"
			className="w-full h-full">
			<TabsList className="grid w-full grid-cols-2 h-full rounded-none sm:flex sm:flex-col justify-startgit ">
				<TabsTrigger
					value="content"
					className="sm:w-20">
					<div className="flex flex-col items-center gap-1">
						{!isSmallScreen && <PencilIcon className="h-6" />}
						<p className="text-sm">Content</p>
					</div>
				</TabsTrigger>
				<TabsTrigger
					value="password"
					className="sm:w-20">
					<div className="flex flex-col items-center gap-1">
						{!isSmallScreen && <SparklesIcon className="h-6" />}
						<p className="text-sm">Customize</p>
					</div>
				</TabsTrigger>
			</TabsList>
			<TabsContent value="content"></TabsContent>
			<TabsContent value="password"></TabsContent>
		</Tabs>
	);
}

export default TabComponent;
