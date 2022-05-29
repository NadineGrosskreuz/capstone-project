import { useState } from 'react';
import useStore from '../useStore';
import Form from '../Form/Form';
import SVGIcon from '../UI/SVG';
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
	edit,
	bookmark,
}) {
	const [show, setShow] = useState(false);

	const handleOpen = () => {
		setShow(!show);
	};
	const handleDelete = () => {
		deleteEntry(id);
	};
	const deleteEntry = useStore(state => state.deleteEntry);
	const editEntry = useStore(state => state.editEntry);
	const bookmarkTrue = useStore(state => state.bookmarkTrue);
	const bookmarkFalse = useStore(state => state.bookmarkFalse);

	return (
		<CardContainer>
			{edit && <Form id={id} />}
			{!edit && (
				<>
					<Button
						type="button"
						variant="bookmark"
						aria-label="zu favoriten hinzufügen"
						onClick={() => {
							bookmark ? bookmarkFalse(id) : bookmarkTrue(id);
						}}
					>
						{bookmark ? (
							<SVGIcon variant="heart_filled" size="25px" color="#342293" />
						) : (
							<SVGIcon variant="heart" size="25px" color="#342293" />
						)}
					</Button>

					<Typography variant="p">{category}</Typography>
					<Typography variant="h2">{name}</Typography>
					<Typography variant="p">{address}</Typography>
					<Button onClick={handleOpen}>
						{show ? 'Weniger anzeigen' : 'Mehr anzeigen'}
					</Button>
					{show && <Typography variant="p">{products}</Typography>}
					{show && <Typography variant="p">{information}</Typography>}
					{show && <Typography variant="p">{visited}</Typography>}
					{show && <Typography variant="p">{rating}</Typography>}
					{show && <Button onClick={handleDelete}>Löschen</Button>}
					{show && (
						<Button
							onClick={() => {
								editEntry(id);
							}}
						>
							{edit ? 'Speichern' : 'Ändern'}
						</Button>
					)}
				</>
			)}
		</CardContainer>
	);
}
