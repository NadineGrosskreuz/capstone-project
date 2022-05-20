import Card from '../Card/Card';
import { CardGrid } from '../UI/CardGrid.styled';
import useStore from '../useStore';

export default function CardList() {
	const entries = useStore(state => state.entries);
	return (
		<CardGrid>
			{entries.map(entry => (
				<Card
					key={entry.id}
					id={entry.id}
					category={entry.category}
					name={entry.name}
					address={entry.address}
					products={entry.products}
					information={entry.information}
					visited={entry.visited}
					rating={entry.rating}
				/>
			))}
		</CardGrid>
	);
}
