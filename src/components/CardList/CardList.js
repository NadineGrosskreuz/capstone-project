import Card from '../Card/Card';
import { CardGrid } from '../UI/CardGrid.styled';

export default function CardList({ entries, onDeleteEntry }) {
	return (
		<CardGrid>
			{entries.map(entry => (
				<Card
					key={entry.id}
					category={entry.category}
					name={entry.name}
					address={entry.address}
					products={entry.products}
					information={entry.information}
					visited={entry.visited}
					rating={entry.rating}
					onDeleteEntry={onDeleteEntry}
				/>
			))}
		</CardGrid>
	);
}
