import React, { useState } from 'react';
import { getEntries } from '../src/services/get-entry';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import CardList from '../src/components/CardList/CardList';
import Form from '../src/components/Form/Form';

export function getStaticProps() {
	const entries = getEntries();
	return {
		props: {
			entries,
		},
	};
}

export default function Home() {
	const [entries, setEntries] = useState(getEntries);
	const addEntry = newentry => {
		setEntries([
			...entries,
			{
				category: newentry.category,
				name: newentry.name,
				address: newentry.address,
				products: newentry.products,
				information: newentry.information,
				visited: newentry.visited,
				rating: newentry.rating,
			},
		]);
	};

	return (
		<PageContainer>
			<Form onAddEntry={addEntry} />
			<CardList entries={entries} />
		</PageContainer>
	);
}
