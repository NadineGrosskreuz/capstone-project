import React from 'react';
import useStore from '../useStore';
import Card from '../Card/Card';
import { CardGrid } from '../UI/CardGrid.styled';

export default function CardList({ bookmarkMode, searchBarInput }) {
	const entries = useStore(state => state.entries);

	if (bookmarkMode) {
		const bookmarks = entries.filter(entry => entry.bookmark == true);
		return (
			<CardGrid>
				{bookmarks.map(entry => (
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
			</CardGrid>
		);
	} else {
		return (
			<CardGrid>
				{entries
					.filter(entry => {
						if (searchBarInput === '') {
							return entry;
						} else {
							return (
								entry.category
									.toLowerCase()
									.includes(searchBarInput.toLowerCase()) ||
								entry.name.toLowerCase().includes(searchBarInput.toLowerCase()) ||
								entry.address
									.toLowerCase()
									.includes(searchBarInput.toLowerCase()) ||
								entry.information
									.toLowerCase()
									.includes(searchBarInput.toLowerCase())
							);
						}
					})
					.map(entry => (
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
			</CardGrid>
		);
	}
}
