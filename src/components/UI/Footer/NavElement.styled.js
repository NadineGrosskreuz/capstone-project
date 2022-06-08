import styled from 'styled-components';

const NavElement = styled.a`
	background-color: ${props => (props.href === props.pathName ? '#ffa375' : 'white')};
	width: 50px;
	padding: 5px;
	margin: 4px 0;
	border-radius: var(--border-radius-circle);
	display: flex;
	justify-content: center;
`;

export { NavElement };
