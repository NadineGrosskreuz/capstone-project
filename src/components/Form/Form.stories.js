/* eslint-disable import/no-anonymous-default-export */
import Form from '../../components/Form/Form';

export default {
	title: 'Components/Form/Form',
	component: Form,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <Form />;
}
