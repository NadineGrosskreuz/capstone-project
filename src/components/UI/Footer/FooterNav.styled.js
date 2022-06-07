import styled from 'styled-components';

const FooterNav = styled.nav`
	background-color: var(--secondary-color);
	width: var(--footer-header-width);
	height: var(--footer-header-height);
	bottom: 0;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-around;
	z-index: 3000;
`;

export { FooterNav };
