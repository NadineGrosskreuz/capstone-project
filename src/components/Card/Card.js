import { useState } from 'react';
import useStore from '../useStore';
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
}) {
	const [show, setShow] = useState(false);
	const handleOpen = () => {
		setShow(!show);
	};
	const handleDelete = () => {
		deleteEntry(id);
	};
	const deleteEntry = useStore(state => state.deleteEntry);

	return (
		<CardContainer>
			<Typography variant="p">{category}</Typography>
			<Typography variant="h2">{name}</Typography>
			<Typography variant="p">{address}</Typography>
			<Button onClick={handleOpen}>{show ? 'Weniger anzeigen' : 'Mehr anzeigen'}</Button>
			{show && <Typography variant="p">{products}</Typography>}
			{show && <Typography variant="p">{information}</Typography>}
			{show && <Typography variant="p">{visited}</Typography>}
			{show && <Typography variant="p">{rating}</Typography>}
			{show && <Button onClick={handleDelete}>Löschen</Button>}
		</CardContainer>
	);
}
