import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

function TabComponent() {
	return (
		<Tabs
			defaultValue="content"
			className="w-full h-full">
			<TabsList className="grid w-full grid-cols-2 h-full rounded-none">
				<TabsTrigger value="content">Content</TabsTrigger>
				<TabsTrigger value="password">Customize</TabsTrigger>
			</TabsList>
			<TabsContent value="content"></TabsContent>
			<TabsContent value="password"></TabsContent>
		</Tabs>
	);
}

export default TabComponent;
