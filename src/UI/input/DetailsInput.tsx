import { ChangeEvent } from 'react';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

type detailsProps = {
	details: {
		name: string;
		email: string;
		phone: string;
		location: string;
	};
	handleChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

function DetailsInput({ details, handleChange }: detailsProps) {
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
								value={details.name}
								onChange={handleChange}
							/>
						</div>

						<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
							<Label htmlFor="email">Email :</Label>
							<Input
								type="email"
								id="email"
								value={details.email}
								placeholder="babayaga@gmail.com"
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
							<Label htmlFor="phone">Phone :</Label>
							<Input
								type="text"
								id="phone"
								value={details.phone}
								placeholder="+34 123-456-789"
								onChange={handleChange}
							/>
						</div>
						<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
							<Label htmlFor="location">Location :</Label>
							<Input
								type="text"
								id="location"
								value={details.location}
								placeholder="New York, USA"
								onChange={handleChange}
							/>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default DetailsInput;
