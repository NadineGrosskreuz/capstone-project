import styled from 'styled-components';

const ModalContainer = styled.div`
	background-color: white;
	color: black;
	border-radius: 20px;
	box-shadow: 0 0 0 8px var(--secondary-color), 0 0 0 12px var(--primary-color), 0 0 0 16px white;
	width: 91vw;
	height: 20vh;
	top: 40%;
	position: fixed;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
`;

export { ModalContainer };
