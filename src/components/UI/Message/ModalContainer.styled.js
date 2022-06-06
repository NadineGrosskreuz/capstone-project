import styled from 'styled-components';

const ModalContainer = styled.div`
	background-color: var(--orange);
	color: black;
	border-radius: 20px;
	border: 5px solid var(--blue);
	width: 100vw;
	height: 30vh;
	position: fixed;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	top: 40%;
`;

export { ModalContainer };
