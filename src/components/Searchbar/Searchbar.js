import { useState } from 'react';

export default function Searchbar({ setSearchBarInput }) {
	const [input, setInput] = useState('');

	const handleChange = event => {
		setInput(event.target.value);
	};

	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				setSearchBarInput(input);
			}}
		>
			<label>
				<input type="search" value={input} onChange={handleChange} />
			</label>
			<button type="submit">Suchen</button>
		</form>
	);
}
