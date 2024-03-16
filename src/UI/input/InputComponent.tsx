import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

function InputComponent() {
	return (
		<div className="p-1">
			<Accordion
				type="single"
				collapsible>
				<AccordionItem value="name">
					<AccordionTrigger>Personal Details</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-3">
						<div className="flex flex-col w-full max-w-sm gap-1.5 pl-1">
							<Label htmlFor="name">Full name: </Label>
							<Input
								type="text"
								id="name"
								placeholder="John Wick"
							/>
						</div>
						<div className="flex flex-col w-full max-w-sm gap-1.5 pl-1">
							<Label htmlFor="email">Email: </Label>
							<Input
								type="email"
								id="email"
								placeholder="babayaga@gmail.com"
							/>
						</div>
						<div className="flex flex-col w-full max-w-sm gap-1.5 pl-1">
							<Label htmlFor="phone">Phone: </Label>
							<Input
								type="number"
								id="phone"
								placeholder="+34 111-247-339"
							/>
						</div>
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default InputComponent;
