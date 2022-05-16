import { CardContainer } from '../UI/CardContainer.styled';
import Typography from '../UI/Typography';

export default function Card({ category, name, address }) {
	return (
		<CardContainer>
			<Typography variant="p">{category}</Typography>
			<Typography variant="h2">{name}</Typography>
			<Typography variant="p">{address}</Typography>
		</CardContainer>
	);
}
