import Card from '../Card/Card';

export default function CardList({ entries }) {
	return entries.map(entry => {
		return (
			<Card
				key={entry.id}
				category={entry.category}
				name={entry.name}
				address={entry.address}
			/>
		);
	});
}
