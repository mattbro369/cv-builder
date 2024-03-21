import { FormEvent } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
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

type detailsProps = {
	name: string;
	email: string;
	phone: string;
	location: string;
	handleChange: (event: FormEvent<HTMLInputElement>) => void;
};

function InputSectionComponent({
	name,
	email,
	phone,
	location,
	handleChange,
}: detailsProps) {
	return (
		<div className="p-1">
			<Accordion type="multiple">
				<AccordionItem value="details">
					<AccordionTrigger>Personal Details</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-3">
						<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
							<Label htmlFor="name">Full name :</Label>
							<Input
								type="text"
								id="name"
								placeholder="John Wick"
								defaultValue={name}
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
							<Label htmlFor="email">Email :</Label>
							<Input
								type="email"
								id="email"
								placeholder="babayaga@gmail.com"
								defaultValue={email}
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
							<Label htmlFor="phone">Phone :</Label>
							<Input
								type="text"
								id="phone"
								placeholder="+34 123-456-789"
								defaultValue={phone}
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
							<Label htmlFor="location">Location :</Label>
							<Input
								type="text"
								id="location"
								placeholder="New York, USA"
								defaultValue={location}
								onChange={handleChange}
							/>
						</div>
					</AccordionContent>
				</AccordionItem>

				{/* experience */}
				<AccordionItem value="experience">
					<AccordionTrigger>Experience</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-3">
						{positions_arr.map((position) => {
							return (
								<div
									className="pl-2"
									key={positions_arr.indexOf(position)}>
									<AccordionItem value={position.company}>
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
