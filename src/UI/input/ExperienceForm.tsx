import { Label } from '@radix-ui/react-label';
import { position } from '@/App';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

type positionProp = { position?: position };

function ExperienceForm({ position }: positionProp) {
	return (
		<>
			<div className="flex flex-col gap-1">
				<Label>Company: </Label>
				<Input
					type="text"
					id="company"
					placeholder="Company"
					defaultValue={position?.company}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<Label>Title: </Label>
				<Input
					type="text"
					id="title"
					placeholder="Title"
					defaultValue={position?.title}
				/>
			</div>
			<div className="flex gap-2">
				<div className="flex flex-col gap-1 flex-1">
					<Label>Start: </Label>
					<Input
						type="text"
						id="start"
						placeholder="Start date"
						defaultValue={position?.start}
					/>
				</div>
				<div className="flex flex-col gap-1 flex-1">
					<div className="flex flex-col gap-1">
						<Label>End: </Label>
						<Input
							type="text"
							id="end"
							placeholder="End date"
							defaultValue={position?.end}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col gap-1">
				<Label>Location: </Label>
				<Input
					type="text"
					id="location"
					placeholder="Location"
					defaultValue={position?.location}
				/>
			</div>
			<div className="flex flex-col gap-1">
				<Label>Description: </Label>
				<Textarea
					id="description"
					placeholder="Description"
					defaultValue={position?.description}
				/>
			</div>
		</>
	);
}

export default ExperienceForm;
