/* eslint-disable import/no-anonymous-default-export */
import Card from './Card';

export default {
	title: 'Components/Card',
	component: Card,
	decorators: [
		Story => {
			return (
				<div>
					<Story />
				</div>
			);
		},
	],
};

const cardProps = {
	category: 'Flohmarkt',
	name: 'Faust',
	address: 'Zur Bettfedernfabrik 3, 30451 Hannover',
};

export function Default() {
	return <Card {...cardProps} />;
}
