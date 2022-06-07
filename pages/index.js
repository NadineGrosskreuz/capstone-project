import React from 'react';
import { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import Searchbar from '../src/components/Searchbar/Searchbar';

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
			<Head>
				<title>Home</title>
				<meta key="title" property="og:title" content="Home" />
			</Head>
			<PageContainer>
				<Searchbar searchBarInput={searchBarInput} setSearchBarInput={setSearchBarInput} />
				<CardList searchBarInput={searchBarInput} />
				<Modal />
			</PageContainer>
		</>
	);
}
