import React from 'react';
import dynamic from 'next/dynamic';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import Form from '../src/components/Form/Form';

export default function FormPage() {
	const Modal = dynamic(() => import('../src/components/Form/Modal'), {
		ssr: false,
	});
	return (
		<PageContainer>
			<Modal />
			<Form />
		</PageContainer>
	);
}
