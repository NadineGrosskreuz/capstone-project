import styled from 'styled-components';

const NavElement = styled.a`
	background-color: ${props => (props.href === props.pathName ? '#ffa375' : 'white')};
	width: 50px;
	border-radius: var(--border-radius-circle);
	padding: 4px;
	display: flex;
	justify-content: center;
`;

export { NavElement };
