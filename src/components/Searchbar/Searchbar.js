import { useState, useEffect } from 'react';
import useStore from '../useStore';
import { useForm } from 'react-hook-form';
import Card from '../Card/Card';

export default function Searchbar({ id }) {
	const [searchTerm, setSearchTerm] = useState('');
	const entries = useStore(state => state.entries);
	const findEntry = useStore(state => state.findEntry);
	const foundEntries = useStore(state => state.foundEntries);
	const entryFound = entries.find(entry => entry.id === id);

	console.log(foundEntries);

	const handleChange = event => {
		setSearchTerm(event.target.value);
	};

	const { setValue } = useForm();

	useEffect(() => {
		if (entryFound) {
			setValue('category', entryFound.category);
			setValue('name', entryFound.name);
			setValue('address', entryFound.address);
			setValue('products', entryFound.products);
			setValue('information', entryFound.information);
			setValue('visited', entryFound.visited);
			setValue('rating', entryFound.rating);
			setValue('edit', entryFound.edit);
			setValue('bookmark', entryFound.bookmark);
		}
	}, [entryFound, setValue]);

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
