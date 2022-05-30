/* eslint-disable import/no-anonymous-default-export */
import Map from './Map';

export default {
	title: 'Components/Map',
	component: Map,
	decorators: [
		Story => {
			return <Story />;
		},
	],
};

export function Default() {
	return <Map />;
}
