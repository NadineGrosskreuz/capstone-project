import styled from 'styled-components';

const NavElement = styled.a`
	background-color: ${props => (props.href === props.pathName ? '#ffa375' : 'white')};
	font-size: 1.6rem;
	color: white;
	width: 55px;
	border-radius: 50%;
	padding: 5px;
	margin: 7px;
	display: flex;
	justify-content: center;
`;

export { NavElement };
