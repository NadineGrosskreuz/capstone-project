import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: var(--blue);
	font-size: 1.6rem;
	color: white;
	padding: 5px;
	margin-bottom: 12px;
	border-radius: 20px;
	border: none;
	width: 55%;
	display: flex;
	align-self: center;
	justify-content: center;
	cursor: pointer;
	${({ variant }) =>
		variant == 'addentry' &&
		css`
			margin: 20px 0 0 22%;
		`}
	${({ variant }) =>
		variant === 'nav' &&
		css`
			background-color: ${props =>
				props.href === props.pathName ? 'var(--orange)' : 'white'};
			width: 55px;
			border-radius: 50%;
			padding: 5px;
			margin: 7px;
			border: none;
		`}
		${({ variant }) =>
		variant == 'bookmark' &&
		css`
			background-color: transparent;
			border: none;
			padding: 0;
			top: 10px;
			right: 1.5rem;
			justify-content: right;
			position: absolute;
		`}
		${({ variant }) =>
		variant == 'search' &&
		css`
			background-color: var(--orange);
			color: black;
			width: 8rem;
			margin: 0 0 0 10px;
		`}
		${({ variant }) =>
		variant == 'small' &&
		css`
			width: 40%;
			margin: 10px 0 0 0;
		`}
`;

export { Button };
