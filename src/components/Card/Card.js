import { CardContainer } from '../UI/CardContainer.styled';
import Typography from '../UI/Typography';

export default function Card({ entries }) {
	return (
		<CardContainer>
			<Typography variant="p">{entries.category}</Typography>
			<Typography variant="h2">{entries.name}</Typography>
			<Typography variant="p">{entries.address}</Typography>
		</CardContainer>
	);
}
