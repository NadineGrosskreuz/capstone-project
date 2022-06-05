import React from 'react';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import Form from '../src/components/Form/Form';
import Header from '../src/components/Header/Header';

export default function FormPage() {
	return (
		<>
			<Header />
			<PageContainer>
				<Form />
			</PageContainer>
		</>
	);
}
