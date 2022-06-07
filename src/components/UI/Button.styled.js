import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: var(--secondary-color);
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
				props.href === props.pathName ? 'var(--primary-color)' : 'white'};
			width: 55px;
			border-radius: var(--border-radius-circle);
			padding: 5px;
			margin: 7px;
			border: none;
		`}
		${({ variant }) =>
		variant == 'search' &&
		css`
			background-color: var(--primary-color);
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
