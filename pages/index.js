import React from 'react';
import dynamic from 'next/dynamic';
import { getEntries } from '../src/services/get-entry';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import Form from '../src/components/Form/Form';
import Modal from '../src/components/Form/Modal';

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

	return (
		<PageContainer>
			<Modal />
			<Form />
			<CardList />
		</PageContainer>
	);
}
