import styled, { css } from 'styled-components';

const Input = styled.input`
	font-family: Arimo, sans-serif;
	font-size: 1.6rem;
	${({ variant }) =>
		variant == 'text' &&
		css`
			width: var(--input-width);
			margin-top: 5px;
			padding: 5px 5px;
		`}
	${({ variant }) =>
		variant == 'radio' &&
		css`
			width: 1.4rem;
			height: 1.4rem;
			cursor: pointer;
			
			}
			
		`}
`;

export { Input };
