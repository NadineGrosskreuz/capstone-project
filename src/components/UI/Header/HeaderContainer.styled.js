import styled from 'styled-components';

const HeaderContainer = styled.header`
	background-color: var(--blue);
	width: 100%;
	height: 8%;
	position: sticky;
	z-index: 5000;
	left: 0;
	top: 0;
	display: grid;
	grid-template-columns: repeat(3, 33%);
`;

export { HeaderContainer };
