import Card from '../Card/Card';

export default function CardList({ entries }) {
	return (
		<div>
			{entries.map(entry => (
				<div key={entry.id}>
					<Card category={entry.category} name={entry.category} address={entry.address} />
				</div>
			))}
		</div>
	);
}
