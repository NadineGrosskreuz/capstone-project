import React from 'react';
import Head from 'next/head';
import CardList from '../src/components/CardList/CardList';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

export default function BookmarkPage() {
	return (
		<>
			<Head>
				<title>Favoriten</title>
				<meta key="title" property="og:title" content="Favoriten" />
			</Head>
			<PageContainer>
				<CardList bookmarkMode="true" />
			</PageContainer>
		</>
	);
}
