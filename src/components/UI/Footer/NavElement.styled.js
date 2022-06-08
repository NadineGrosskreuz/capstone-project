import styled from 'styled-components';

const NavElement = styled.a`
	background-color: ${props => (props.href === props.pathName ? '#ffa375' : 'white')};
	width: 40px;
	height: 40px;
	border-radius: var(--border-radius-circle);
	display: flex;
	justify-content: center;
	align-items: center;
`;

export { NavElement };
