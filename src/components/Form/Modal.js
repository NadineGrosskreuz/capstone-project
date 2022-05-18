export default function Modal({ visibility, modalHide }) {
	if (visibility === true) {
		return (
			<div>
				<p>Dein Eintrag wurde hinzugefügt</p>
				<button type="button" onClick={modalHide}>
					Schließen
				</button>
			</div>
		);
	} else {
		return '';
	}
}
