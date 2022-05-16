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
			products: 'Kleidung, Deko, Medien, Spielsachen',
			information: 'Stadtteil-Flohmarkt, tolle Atmosphäre',
			visited: 'Ich war schon da',
			rating: 'Mag ich!',
		},

		{
			id: '2',
			category: 'Laden',
			name: 'Frau Schröder',
			address: 'Kötnerholzweg 33A, 30451 Hannover',
			products: 'Kleidung',
			information:
				'Tolle Beratung durch die nette Inhaberin, viele schöne Vintage-Teile zu moderaten Preisen',
			visited: 'Ich war schon da',
			rating: 'Mag ich!',
		},

		{
			id: '3',
			category: 'Flohmarkt',
			name: 'Altstadt',
			address: 'Am Hohen Ufer 3, 30159 Hannover',
			products: 'Deko, Medien, Antiquitäten',
			information:
				'Der bekannteste Flohmarkt Hannovers, von der Auswahl her aber leider nicht meins',
			visited: 'Ich war schon da',
			rating: 'Nicht mein Fall!',
		},
	],
};

export function Default() {
	return <CardList {...cardListProps} />;
}
