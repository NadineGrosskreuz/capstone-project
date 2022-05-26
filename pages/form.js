import React from 'react';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import Form from '../src/components/Form/Form';
import Modal from '../src/components/Form/Modal';

export default function FormPage() {
	return (
		<PageContainer>
			<Modal />
			<Form />
		</PageContainer>
	);
}
