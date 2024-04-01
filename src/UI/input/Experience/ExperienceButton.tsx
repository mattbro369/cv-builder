import { Button } from '@/components/ui/button';

type ButtonProps = {
	addExperienceOnClick: () => void;
};

function ButtonCustom({ addExperienceOnClick }: ButtonProps) {
	return (
		<div className="flex w-full max-w-sm px-1">
			<Button
				className="w-16"
				onClick={addExperienceOnClick}>
				Add
			</Button>
		</div>
	);
}

export default ButtonCustom;
