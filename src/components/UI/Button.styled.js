import styled, { css } from 'styled-components';

const Button = styled.button`
	background-color: #342293;
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
	${({ variant }) => variant == 'addentry' && css` margin-top: 10px;}`}
	${({ variant }) =>
		variant === 'nav' &&
		css`
			border: none;
			margin: 5px;
		`}
`;

export { Button };
