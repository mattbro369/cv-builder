import { ReactNode } from 'react';

import AccordionCustom from '../Accordion';
import ButtonCustom from './ExperienceButton';

// type ExperienceInputProps = {
// 	handlePositionChange: (
// 		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
// 		id: number
// 	) => void;
// };

function ExperienceInput({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="p-1">
				<AccordionCustom
					value="experience-input"
					trigger="Experience">
					{children}
				</AccordionCustom>
			</div>
		</>
	);
}

ExperienceInput.Accordion = AccordionCustom;
ExperienceInput.Button = ButtonCustom;

export default ExperienceInput;
