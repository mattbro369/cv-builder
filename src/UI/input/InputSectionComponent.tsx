import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import FormInputComponent from './FormInputComponent';
import ExperienceForm from './ExperienceForm';

export interface position {
	company: string;
	title: string;
	// Change to dates
	start: string;
	end: string;
	location: string;
	description: string;
}

const positions_arr: position[] = [
	{
		company: 'Umbrella',
		title: 'Hitman',
		start: '06/1984',
		end: '08/1990',
		location: 'New York, USA',
		description: 'Handled multiple issues for clients',
	},
	{
		company: 'Self employed',
		title: 'Hitman',
		start: '08/1990',
		end: 'Present day',
		location: 'New York, USA',
		description: 'Handled multiple issues for myself',
	},
];

function InputSectionComponent() {
	return (
		<div className="p-1">
			<Accordion type="multiple">
				<AccordionItem value="details">
					<AccordionTrigger>Personal Details</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-3">
						<FormInputComponent
							label="Full name"
							inputType="text"
							id="name"
							placeholder="John Wick"
						/>
						<FormInputComponent
							label="Email"
							inputType="email"
							id="email"
							placeholder="babayaga@gmail.com"
						/>
						<FormInputComponent
							label="Phone"
							inputType="number"
							id="phone"
							placeholder="+345 611-298-945"
						/>
						<FormInputComponent
							label="Location"
							inputType="text"
							id="location"
							placeholder="New York, USA"
						/>
					</AccordionContent>
				</AccordionItem>

				{/* experience */}
				<AccordionItem value="experience">
					<AccordionTrigger>Experience</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-3">
						{positions_arr.map((position) => {
							return (
								<div className="pl-2">
									<AccordionItem
										value={position.company}
										key={positions_arr.indexOf(position)}>
										<AccordionTrigger>{position.company}</AccordionTrigger>
										<AccordionContent className="flex flex-col gap-3">
											<ExperienceForm position={position} />
										</AccordionContent>
									</AccordionItem>
								</div>
							);
						})}

						{positions_arr.length < 1 && <ExperienceForm />}

						<div className="flex w-full max-w-sm px-1">
							<Button className="w-16">Add</Button>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default InputSectionComponent;
