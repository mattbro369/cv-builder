import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

function ExpForm() {
	return (
		<>
			<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
				<Label htmlFor="name">Company: </Label>
				<Input
					type="text"
					id="company"
					placeholder="Self employed"
				/>
			</div>
			<div className="flex flex-col w-full max-w-sm gap-1.5 px-1">
				<Label htmlFor="position">Position: </Label>
				<Input
					type="text"
					id="position"
					placeholder="Hitman"
				/>
			</div>
			<div className="flex gap-2 px-1">
				<div className="flex flex-col flex-1 max-w-sm gap-1.5">
					<Label htmlFor="start-date">Start date: </Label>
					<Input
						type="text"
						id="start-date"
						placeholder="02/1986"
					/>
				</div>
				<div className="flex flex-col flex-1 max-w-sm gap-1.5  ">
					<Label htmlFor="end-date">End date: </Label>
					<Input
						type="text"
						id="end-date"
						placeholder="09/2023"
					/>
				</div>
			</div>
			<div className="flex flex-col flex-1 max-w-sm gap-1.5 px-1">
				<Label htmlFor="location">Location: </Label>
				<Input
					type="text"
					id="location"
					placeholder="New York, US"
				/>
			</div>
			<div className="flex flex-col flex-1 max-w-sm gap-1.5 px-1">
				<Label htmlFor="location">Description: </Label>
				<Textarea />
			</div>
		</>
	);
}

export default ExpForm;
