import { CardContainer, CardCategory, CardName, CardAddress } from './Card.styled.js';

export default function Card({ entries }) {
	return (
		<CardContainer>
			<CardCategory>{entries.category}</CardCategory>
			<CardName>{entries.name}</CardName>
			<CardAddress>{entries.address}</CardAddress>
		</CardContainer>
	);
}
