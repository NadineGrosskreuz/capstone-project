import { useState } from 'react';
import { SearchButton } from '../UI/Button/SearchButton.styled';
import { FormSearch } from '../UI/Searchbar/FormSearch.styled';
import { InputSearch } from '../UI/Searchbar/InputSearch.styled';
import SVGIcon from '../UI/SVG';

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
				<SearchButton type="submit" aria-label="Suche">
					<SVGIcon variant="magnify" size="30px" />
				</SearchButton>
			</label>
		</FormSearch>
	);
}
