import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HTMLInputTypeAttribute } from 'react';

type FormProps = {
	label: string;
	inputType: HTMLInputTypeAttribute | string;
	nameAttr: string;
	placeholder: string;
	value?: string;
};

function FormInputComponent({
	label,
	inputType,
	nameAttr,
	placeholder,
	value,
}: FormProps) {
	return (
		<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
			<Label htmlFor={nameAttr}>{label} :</Label>
			{inputType === 'textarea' ? (
				<Textarea
					name={nameAttr}
					placeholder={placeholder}
					value={value}
				/>
			) : (
				<Input
					type={inputType}
					name={nameAttr}
					placeholder={placeholder}
					value={value}
				/>
			)}
		</div>
	);
}

export default FormInputComponent;
