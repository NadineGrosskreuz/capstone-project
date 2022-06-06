import useStore from '../useStore';
import Typography from '../UI/Typography';
import { Button } from '../UI/Button.styled';
import { ModalContainer } from '../UI/Message/ModalContainer.styled';

export default function Modal() {
	const modalState = useStore(state => state.modalState);
	const setModalState = useStore(state => state.setModalState);
	const modalMessages = useStore(state => state.modalMessages);

	const resetModal = () => {
		setModalState(null);
	};

	switch (modalState) {
		case 'sent':
			return (
				<ModalContainer>
					<Typography variant="p"> {modalMessages[modalState]} </Typography>
					<Button type="button" onClick={resetModal}>
						Schließen
					</Button>
				</ModalContainer>
			);
		case 'delete':
			return (
				<ModalContainer>
					<Typography variant="p"> {modalMessages[modalState]} </Typography>
					<Button type="button" onClick={resetModal}>
						Schließen
					</Button>
				</ModalContainer>
			);
		case 'updated':
			return (
				<ModalContainer>
					<Typography variant="p"> {modalMessages[modalState]} </Typography>

					<Button type="button" onClick={resetModal}>
						Schließen
					</Button>
				</ModalContainer>
			);
		default:
			return null;
	}
}
