import { useState } from 'react';
import useStore from '../useStore';

export default function Searchbar() {
	const [searchTerm, setSearchTerm] = useState('');
	const findEntry = useStore(state => state.findEntry);

	return (
		<form
			onSubmit={event => {
				event.preventDefault();
				findEntry(searchTerm);
			}}
		>
			<label>
				Search for flea markets/shops{' '}
				<input
					type="search"
					placeholder="search for flea markets/shops"
					value={searchTerm}
					onChange={event => {
						setSearchTerm(event.target.value);
					}}
				/>
			</label>
			<button type="submit">Suche</button>
		</form>
	);
}
