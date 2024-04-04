import { ChangeEvent } from 'react';

import { Label } from '@radix-ui/react-label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { position } from '@/App';

type ExpFormProp = {
	position?: position;
	handlePositionChange: (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		id: number | undefined
	) => void;
};

function ExperienceForm({ position, handlePositionChange }: ExpFormProp) {
	if (!position) {
		console.log(position);
		return null; // or render a fallback UI here
	}

	return (
		<>
			<div className="flex flex-col gap-1">
				<Label>Company: </Label>
				<Input
					type="text"
					id="company"
					name="company"
					placeholder="Company"
					value={position.company}
					onChange={(event) => handlePositionChange(event, position.id)}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<Label>Title: </Label>
				<Input
					type="text"
					id="title"
					name="title"
					placeholder="Title"
					value={position.title}
					onChange={(event) => handlePositionChange(event, position.id)}
				/>
			</div>
			<div className="flex gap-2">
				<div className="flex flex-col gap-1 flex-1">
					<Label>Start: </Label>
					<Input
						type="text"
						id="start"
						name="start"
						placeholder="Start date"
						value={position.start}
						onChange={(event) => handlePositionChange(event, position.id)}
					/>
				</div>
				<div className="flex flex-col gap-1 flex-1">
					<div className="flex flex-col gap-1">
						<Label>End: </Label>
						<Input
							type="text"
							id="end"
							name="end"
							placeholder="End date"
							value={position.end}
							onChange={(event) => handlePositionChange(event, position.id)}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<Label>Location: </Label>
				<Input
					type="text"
					id="location"
					name="location"
					placeholder="Location"
					value={position.location}
					onChange={(event) => handlePositionChange(event, position.id)}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<Label>Description: </Label>
				<Textarea
					id="description"
					name="description"
					placeholder="Description"
					value={position.description}
					onChange={(event) => handlePositionChange(event, position.id)}
				/>
			</div>
		</>
	);
}

export default ExperienceForm;
