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
		<Accordion type="multiple">
			<AccordionItem
				value={props.value}
				className="pl-1">
				<AccordionTrigger>{props.trigger}</AccordionTrigger>
				<AccordionContent className="flex flex-col gap-3">
					{props.children}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
}

export default AccordionCustom;
