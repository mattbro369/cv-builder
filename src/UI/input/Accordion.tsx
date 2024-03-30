import { PropsWithChildren } from 'react';
import {
	Accordion,
	AccordionItem,
	AccordionTrigger,
	AccordionContent,
} from '@/components/ui/accordion';

type AccordionProps = {
	value: string;
	trigger: string;
};

function AccordionCustom(props: PropsWithChildren<AccordionProps>) {
	return (
		<div className="pl-2">
			<Accordion type="multiple">
				<AccordionItem value={props.value}>
					<AccordionTrigger>{props.trigger}</AccordionTrigger>
					<AccordionContent className="flex flex-col gap-3">
						{props.children}
					</AccordionContent>
				</AccordionItem>
			</Accordion>
		</div>
	);
}

export default AccordionCustom;
