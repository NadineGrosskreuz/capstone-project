import Card from '../Card/Card';
import { CardContainer } from '../UI/CardContainer.styled';
import { CardGrid } from '../UI/CardGrid.styled';

export default function CardList({ entries }) {
	return (
		<CardGrid>
			{entries.map(entry => (
				<CardContainer key={entry.id}>
					<Card category={entry.category} name={entry.name} address={entry.address} />
				</CardContainer>
			))}
		</CardGrid>
	);
}
