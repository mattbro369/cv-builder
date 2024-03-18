import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import FormInputComponent from './FormInputComponent';

interface position {
	company: string;
	title: string;
	// Change to dates
	start: string;
	end: string;
	location: string;
	description: string;
}

const exp_arr: position[] = [
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
						<FormInputComponent
							label="Company"
							inputType="text"
							id="company"
							placeholder="Company"
						/>
						<FormInputComponent
							label="Title"
							inputType="text"
							id="title"
							placeholder="Title"
						/>
						<FormInputComponent
							label="Start date"
							inputType="string"
							id="start-date"
							placeholder="Start date"
						/>
						<FormInputComponent
							label="End date"
							inputType="string"
							id="end-date"
							placeholder="End date"
						/>
						<FormInputComponent
							label="Location"
							inputType="string"
							id="location"
							placeholder="Location"
						/>
						<FormInputComponent
							label="Description"
							inputType="textarea"
							id="description"
							placeholder="Description"
						/>
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
