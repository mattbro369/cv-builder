import FormInputComponent from './FormInputComponent';
import { position } from './InputSectionComponent';

type positionProp = { position?: position };

function ExperienceForm({ position }: positionProp) {
	return (
		<>
			<FormInputComponent
				label="Company"
				inputType="text"
				id="company"
				placeholder="Company"
				value={position?.company}
			/>
			<FormInputComponent
				label="Title"
				inputType="text"
				id="title"
				placeholder="Title"
				value={position?.title}
			/>
			<div className="flex">
				<FormInputComponent
					label="Start date"
					inputType="string"
					id="start-date"
					placeholder="Start date"
					value={position?.start}
				/>
				<FormInputComponent
					label="End date"
					inputType="string"
					id="end-date"
					placeholder="End date"
					value={position?.end}
				/>
			</div>
			<FormInputComponent
				label="Location"
				inputType="string"
				id="location"
				placeholder="Location"
				value={position?.location}
			/>
			<FormInputComponent
				label="Description"
				inputType="textarea"
				id="description"
				placeholder="Description"
				value={position?.description}
			/>
		</>
	);
}

export default ExperienceForm;
