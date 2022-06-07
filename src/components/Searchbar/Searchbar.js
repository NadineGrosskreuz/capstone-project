import { useState } from 'react';
import { Button } from '../UI/Button/Button.styled';
import { FormSearch } from '../UI/Searchbar/FormSearch.styled';
import { InputSearch } from '../UI/Searchbar/InputSearch.styled';

export default function Searchbar({ setSearchBarInput }) {
	const [input, setInput] = useState('');

	const handleChange = event => {
		setInput(event.target.value);
	};

	return (
		<FormSearch
			role="search"
			onSubmit={event => {
				event.preventDefault();
				setSearchBarInput(input);
			}}
		>
			<label htmlFor="Suche" aria-label="Suche">
				<InputSearch type="search" value={input} onChange={handleChange} />
			</label>
			<Button type="submit" variant="orange">
				Suchen
			</Button>
		</FormSearch>
	);
}
