import { TabsTrigger } from '@/components/ui/tabs';
import { PencilIcon } from '@heroicons/react/24/solid';
import { SparklesIcon } from '@heroicons/react/24/solid';
import { ReactElement } from 'react';

interface IProps {
	value: string;
	isSmallScreen: boolean;
}

function TabButton({ value, isSmallScreen }: IProps) {
	let icon!: ReactElement;

	if (value === 'content') {
		icon = <PencilIcon className="h-6" />;
	} else if (value === 'styles') {
		icon = <SparklesIcon className="h-6" />;
	}

	return (
		<TabsTrigger
			value={value}
			className="sm:w-20">
			<div className="flex flex-col items-center gap-1">
				{!isSmallScreen && icon}
				<p className="text-sm">
					{value.charAt(0).toUpperCase() + value.slice(1)}
				</p>
			</div>
		</TabsTrigger>
	);
}

export default TabButton;
