/* eslint-disable import/no-anonymous-default-export */
import { Input } from '../UI/Form/Input.styled';
import { Label } from '../UI/Form/Label.styled';

export default {
	title: 'Components/Form/Input',
	component: Input,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

const props = {
	children: 'Name',
};

export function Default() {
	return (
		<>
			<Label {...props} />
			<Input />
		</>
	);
}
