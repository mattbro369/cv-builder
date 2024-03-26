import { position } from '@/data';

type RenderExperienceProps = {
	position: position;
};

function RenderExperience({ position }: RenderExperienceProps) {
	return (
		<div>
			<p>{position.company}</p>
			<p>{position.title}</p>
			<p>{position.start}</p>
			<p>{position.end}</p>
			<p>{position.location}</p>
			<p>{position.description}</p>
			<br />
		</div>
	);
}

export default RenderExperience;
