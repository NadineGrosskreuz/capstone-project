import styled from 'styled-components';

const HeaderContainer = styled.header`
	background-color: var(--tertiary-color);
	width: var(--footer-header-width);
	height: var(--footer-header-height);
	position: sticky;
	z-index: 5000;
	left: 0;
	top: 0;
	display: grid;
	grid-template-columns: repeat(3, 33%);
`;

export { HeaderContainer };
