import React from 'react';
import BookmarkedCards from '../src/components/BookmarkedCards/BookmarkedCards';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

export default function BookmarkPage() {
	return (
		<PageContainer>
			<BookmarkedCards />
		</PageContainer>
	);
}
