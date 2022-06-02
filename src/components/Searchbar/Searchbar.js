import { useState } from 'react';
import useStore from '../useStore';
import Card from '../Card/Card';

export default function Searchbar() {
	const [searchTerm, setSearchTerm] = useState('');
	const findEntry = useStore(state => state.findEntry);
	const foundEntries = useStore(state => state.foundEntries);

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};

	return (
		<>
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
						onChange={handleChange}
					/>
				</label>
				<button type="submit">Suchen</button>
			</form>
			<ul>
				{foundEntries.map(entry => (
					<Card
						key={entry.id}
						id={entry.id}
						category={entry.category}
						name={entry.name}
						address={entry.address}
						products={entry.products}
						information={entry.information}
						visited={entry.visited}
						rating={entry.rating}
						edit={entry.edit}
						bookmark={entry.bookmark}
					/>
				))}
			</ul>
		</>
	);
}
