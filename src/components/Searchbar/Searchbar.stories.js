/* eslint-disable import/no-anonymous-default-export */
import Searchbar from './Searchbar';

export default {
	title: 'Components/Searchbar',
	component: Searchbar,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <Searchbar />;
}
