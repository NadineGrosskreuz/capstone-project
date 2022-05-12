import styled from 'styled-components';

const CardContainer = styled.section`
	background-color: #ffa375;
	padding: 20px 0 20px 20px;
	border-radius: 20px;
	max-width: 400px;
	display: flex;
	flex-direction: column;
`;

const CardCategory = styled.p`
	font-size: 1.2rem;
	padding-bottom: 12px;
`;

const CardName = styled.h2`
	font-size: 1.7rem;
	text-transform: uppercase;
	padding-bottom: 7px;
`;

const CardAddress = styled.p`
	font-size: 1.2rem;
	padding-bottom: 7px;
`;

export { CardContainer, CardCategory, CardName, CardAddress };
