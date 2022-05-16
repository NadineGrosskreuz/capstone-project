import { useState } from 'react';
import { Accordion } from '../UI/Accordion.styled';
import { CardContainer } from '../UI/CardContainer.styled';
import Typography from '../UI/Typography';

export default function Card({ category, name, address, products, information, visited, rating }) {
	const [show, setShow] = useState(false);
	const handleOpen = () => {
		setShow(!show);
	};
	return (
		<CardContainer onClick={handleOpen}>
			<Typography variant="p">{category}</Typography>
			<Typography variant="h2">{name}</Typography>
			<Typography variant="p">{address}</Typography>
			<Accordion>{show ? 'Weniger anzeigen' : 'Mehr anzeigen'}</Accordion>
			{show && <Typography variant="p">{products}</Typography>}
			{show && <Typography variant="p">{information}</Typography>}
			{show && <Typography variant="p">{visited}</Typography>}
			{show && <Typography variant="p">{rating}</Typography>}
		</CardContainer>
	);
}
