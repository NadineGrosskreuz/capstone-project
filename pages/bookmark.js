import React from 'react';
import CardList from '../src/components/CardList/CardList';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

export default function BookmarkPage() {
	return (
		<PageContainer>
			<CardList bookmarkMode="true" />
		</PageContainer>
	);
}
