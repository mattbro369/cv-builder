import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { HTMLInputTypeAttribute } from 'react';

interface IForm {
	label: string;
	inputType: HTMLInputTypeAttribute | string;
	id: string;
	placeholder: string;
}

function FormInputComponent({ label, inputType, id, placeholder }: IForm) {
	return (
		<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
			<Label htmlFor={id}>{label} :</Label>
			{inputType === 'textarea' ? (
				<Textarea
					itemID={id}
					placeholder={placeholder}
				/>
			) : (
				<Input
					type={inputType}
					id={id}
					placeholder={placeholder}
				/>
			)}
		</div>
	);
}

export default FormInputComponent;
