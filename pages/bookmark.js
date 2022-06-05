import React from 'react';
import CardList from '../src/components/CardList/CardList';
import HeaderBookmark from '../src/components/Header/HeaderBookmark';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

export default function BookmarkPage() {
	return (
		<>
			<HeaderBookmark />
			<PageContainer>
				<CardList bookmarkMode="true" />
			</PageContainer>
		</>
	);
}
