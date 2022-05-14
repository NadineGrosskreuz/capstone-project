/* eslint-disable import/no-anonymous-default-export */
import CardList from './CardList';

export default {
	title: 'Components/CardList',
	component: CardList,
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

const cardListProps = {
	entries: [
		{
			id: '1',
			category: 'Flohmarkt',
			name: 'Faust',
			address: 'Zur Bettfedernfabrik 3, 30451 Hannover',
		},

		{
			id: '2',
			category: 'Laden',
			name: 'Frau Schröder',
			address: 'Kötnerholzweg 33A, 30451 Hannover',
		},

		{
			id: '3',
			category: 'Flohmarkt',
			name: 'Altstadt',
			address: 'Am Hohen Ufer 3, 30159 Hannover',
		},
	],
};

export function Default() {
	return <CardList {...cardListProps} />;
}
