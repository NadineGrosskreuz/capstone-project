import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: var(--secondary-color);
	font-size: 1.6rem;
	color: white;
	padding: 10px 20px;
	border-radius: 20px;
	border: none;
	cursor: pointer;
	${({ variant }) =>
		variant == 'margin-center' &&
		css`
			margin: 20px 0 0 22%;
		`}
	${({ variant }) =>
		variant == 'margin-center-2' &&
		css`
			margin: 20px 0 0 30%;
		`}
	${({ variant }) =>
		variant == 'margin-top' &&
		css`
			margin-top: 10px;
		`}
		${({ variant }) =>
		variant == 'orange' &&
		css`
			background-color: var(--primary-color);
			color: black;
			padding: 5px 10px;
			margin: 0 0 0 10px;
		`}
`;

export { Button };
