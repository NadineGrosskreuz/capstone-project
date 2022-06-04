import useStore from '../useStore';
import Typography from '../UI/Typography';
import { Button } from '../UI/Button.styled';

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
				<>
					<Typography variant="p"> {modalMessages[modalState]} </Typography>
					<Button type="button" onClick={resetModal}>
						Schließen
					</Button>
				</>
			);
		case 'delete':
			return (
				<>
					<Typography variant="p"> {modalMessages[modalState]} </Typography>
					<Button type="button" onClick={resetModal}>
						Schließen
					</Button>
				</>
			);
		case 'updated':
			return (
				<>
					<Typography variant="p"> {modalMessages[modalState]} </Typography>

					<Button type="button" onClick={resetModal}>
						Schließen
					</Button>
				</>
			);
		default:
			return null;
	}
}
