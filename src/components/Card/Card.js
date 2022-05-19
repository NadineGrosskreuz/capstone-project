import { useState } from 'react';
import { Button } from '../UI/Button.styled';
import { CardContainer } from '../UI/CardContainer.styled';
import Typography from '../UI/Typography';

export default function Card({
	id,
	category,
	name,
	address,
	products,
	information,
	visited,
	rating,
	onDeleteEntry,
}) {
	const [show, setShow] = useState(false);
	const handleOpen = () => {
		setShow(!show);
	};
	const handleDelete = () => {
		onDeleteEntry(id);
	};

	return (
		<CardContainer onClick={handleOpen}>
			<Typography variant="p">{category}</Typography>
			<Typography variant="h2">{name}</Typography>
			<Typography variant="p">{address}</Typography>
			<Button>{show ? 'Weniger anzeigen' : 'Mehr anzeigen'}</Button>
			{show && <Typography variant="p">{products}</Typography>}
			{show && <Typography variant="p">{information}</Typography>}
			{show && <Typography variant="p">{visited}</Typography>}
			{show && <Typography variant="p">{rating}</Typography>}
			{show && <Button onClick={handleDelete}>Löschen</Button>}
		</CardContainer>
	);
}
