import React from 'react';
import Head from 'next/head';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import Form from '../src/components/Form/Form';

export default function FormPage() {
	return (
		<>
			<Head>
				<title>Einträge erstellen</title>
				<meta key="title" property="og:title" content="Einträge erstellen" />
			</Head>
			<PageContainer>
				<Form />
			</PageContainer>
		</>
	);
}
