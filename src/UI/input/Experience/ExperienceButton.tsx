import { Button } from '@/components/ui/button';
import { ReactNode } from 'react';

type ButtonProps = {
	children: ReactNode;
	handleClick: () => void;
	style?: 'flex justify-start' | 'flex justify-end';
};

function ButtonCustom({ children, handleClick, style }: ButtonProps) {
	return (
		<div className={`${style} w-full px-1`}>
			<Button
				className="w-16"
				onClick={handleClick}>
				{children}
			</Button>
		</div>
	);
}

export default ButtonCustom;
