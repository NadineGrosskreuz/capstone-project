import { useState } from 'react';
import useStore from '../useStore';
import Form from '../Form/Form';
import SVGIcon from '../UI/SVG';
import { Button } from '../UI/Button/Button.styled';
import { IconButton } from '../UI/Button/IconButton.styled';
import { CardContainer } from '../UI/Card/CardContainer.styled';
import Typography from '../UI/Typography';
import { ButtonContainer } from '../UI/Card/ButtonContainer.styled';

export default function Card({
	id,
	category,
	name,
	address,
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
	const setModalState = useStore(state => state.setModalState);

	return (
		<CardContainer>
			{edit && <Form id={id} />}
			{!edit && (
				<>
					<IconButton
						type="button"
						aria-label="zu favoriten hinzufügen"
						onClick={() => {
							bookmark ? bookmarkFalse(id) : bookmarkTrue(id);
						}}
					>
						{bookmark ? (
							<SVGIcon
								variant="heart_filled"
								size="28px"
								color="var( --secondary-color)"
							/>
						) : (
							<SVGIcon variant="heart" size="28px" color="var( --secondary-color)" />
						)}
					</IconButton>
					<Typography variant="p">{category}</Typography>
					<Typography variant="h2">{name}</Typography>
					<Typography variant="p">{address}</Typography>
					<Button variant="margin-bottom" onClick={handleOpen}>
						{show ? 'Weniger anzeigen' : 'Mehr anzeigen'}
					</Button>
					{show && <Typography variant="p">{information}</Typography>}
					{show && <Typography variant="p">{visited}</Typography>}
					{show && <Typography variant="p">{rating}</Typography>}
					<ButtonContainer>
						{show && (
							<Button
								variant="margin-top"
								onClick={() => {
									handleDelete();
									setModalState('delete');
								}}
							>
								Löschen
							</Button>
						)}
						{show && (
							<Button
								variant="margin-top"
								onClick={() => {
									editEntry(id);
								}}
							>
								{edit ? 'Speichern' : 'Ändern'}
							</Button>
						)}
					</ButtonContainer>
				</>
			)}
		</CardContainer>
	);
}
