import React from 'react';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { getEntries } from '../src/services/get-entry';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import Searchbar from '../src/components/Searchbar/Searchbar';
import HeaderHome from '../src/components/Header/HeaderHome';

export function getStaticProps() {
	const initialEntries = getEntries();
	return {
		props: {
			initialEntries,
		},
	};
}

export default function Home() {
	const CardList = dynamic(() => import('../src/components/CardList/CardList'), {
		ssr: false,
	});
	const Modal = dynamic(() => import('../src/components/Form/Modal'), {
		ssr: false,
	});
	const [searchBarInput, setSearchBarInput] = useState('');

	return (
		<>
			<HeaderHome />
			<PageContainer>
				<Searchbar searchBarInput={searchBarInput} setSearchBarInput={setSearchBarInput} />
				<CardList searchBarInput={searchBarInput} />
				<Modal />
			</PageContainer>
		</>
	);
}
