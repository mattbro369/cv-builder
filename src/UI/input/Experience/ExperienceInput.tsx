import { ReactNode } from 'react';

import ExperienceForm from './ExperienceForm';
import AccordionCustom from '../Accordion';
import ButtonCustom from './ExperienceButton';

function ExperienceInput({ children }: { children: ReactNode }) {
	return (
		<>
			<div className="pl-1 pt-1 pr-1 pb-2">
				<AccordionCustom
					value="experience-input"
					trigger="Experience">
					{children}
				</AccordionCustom>
			</div>
		</>
	);
}

ExperienceInput.Form = ExperienceForm;
ExperienceInput.Accordion = AccordionCustom;
ExperienceInput.Button = ButtonCustom;

export default ExperienceInput;
