import { CardContainer } from '../UI/CardContainer.styled';
import Typography from '../UI/Typography';

export default function Card({ category, name, address, products, information, visited, rating }) {
	return (
		<CardContainer>
			<Typography variant="p">{category}</Typography>
			<Typography variant="h2">{name}</Typography>
			<Typography variant="p">{address}</Typography>
			<Typography variant="p">{products}</Typography>
			<Typography variant="p">{information}</Typography>
			<Typography variant="p">{visited}</Typography>
			<Typography variant="p">{rating}</Typography>
		</CardContainer>
	);
}
