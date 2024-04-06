import { ChangeEvent } from 'react';

import ExperienceForm from './ExperienceForm';
import AccordionCustom from '../Accordion';
import ButtonCustom from './ExperienceButton';
import { Position } from '@/types';

type ExperienceInputProps = {
	positions: Position[];
	handlePositionChange: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		id: string
	) => void;
	removeExperience: (id: string) => void;
	addExperience: () => void;
};

function ExperienceInput({
	positions,
	handlePositionChange,
	removeExperience,
	addExperience,
}: ExperienceInputProps) {
	return (
		<>
			<div className="pl-1 pt-1 pr-1 pb-2">
				<AccordionCustom
					value="experience-input"
					trigger="Experience">
					{positions.map((position) => {
						return (
							<ExperienceInput.Accordion
								key={position.id}
								value={`position-${positions.indexOf(position)}`}
								trigger={
									position.company === ''
										? 'New Position*'
										: `${position.company}`
								}>
								<ExperienceInput.Form
									position={position}
									handlePositionChange={handlePositionChange}
									key={position.id}
								/>

								<ExperienceInput.Button
									handleClick={() => removeExperience(position.id)}
									style="flex justify-end">
									Remove
								</ExperienceInput.Button>
							</ExperienceInput.Accordion>
						);
					})}
					<ExperienceInput.Button handleClick={addExperience}>
						Add
					</ExperienceInput.Button>
				</AccordionCustom>
			</div>
		</>
	);
}

ExperienceInput.Form = ExperienceForm;
ExperienceInput.Accordion = AccordionCustom;
ExperienceInput.Button = ButtonCustom;

export default ExperienceInput;
