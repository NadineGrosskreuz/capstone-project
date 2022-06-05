import React from 'react';
import CardList from '../src/components/CardList/CardList';
import Header from '../src/components/Header/Header';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

export default function BookmarkPage() {
	return (
		<>
			<Header />
			<PageContainer>
				<CardList bookmarkMode="true" />
			</PageContainer>
		</>
	);
}
