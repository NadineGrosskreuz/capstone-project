/* eslint-disable import/no-anonymous-default-export */
import Footer from '../Footer/Footer';

export default {
	title: 'Components/Footer/Footer',
	component: Footer,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <Footer />;
}
