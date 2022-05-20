import useStore from '../useStore';
import Typography from '../UI/Typography';
import { Button } from '../UI/Button.styled';
import { Message } from '../UI/Form/Message.styled';

export default function Modal() {
	const modalState = useStore(state => state.modalState);
	const modalHide = useStore(state => state.modalHide);
	if (modalState === true) {
		return (
			<Message>
				<Typography variant="p">Dein Eintrag wurde hinzugefügt</Typography>
				<Button type="button" onClick={modalHide}>
					Schließen
				</Button>
			</Message>
		);
	} else {
		return '';
	}
}
