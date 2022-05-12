import { CardContainer } from '../UI/CardContainer.styled';
import { Paragraph } from '../UI/Paragraph.styled';
import { HeadlineTwo } from '../UI/HeadlineTwo.styled';

export default function Card({ entries }) {
	return (
		<CardContainer>
			<Paragraph>{entries.category}</Paragraph>
			<HeadlineTwo>{entries.name}</HeadlineTwo>
			<Paragraph>{entries.address}</Paragraph>
		</CardContainer>
	);
}
