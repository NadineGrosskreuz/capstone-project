import React from 'react';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import Form from '../src/components/Form/Form';
import HeaderForm from '../src/components/Header/HeaderForm';

export default function FormPage() {
	return (
		<>
			<HeaderForm />
			<PageContainer>
				<Form />
			</PageContainer>
		</>
	);
}
