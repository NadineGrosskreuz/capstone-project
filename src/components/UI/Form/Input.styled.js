import styled, { css } from 'styled-components';

const Input = styled.input`
	${({ variant }) =>
		variant == 'text' &&
		css`
			width: 100%;
			margin-top: 5px;
			padding: 5px 5px;
		`}
	${({ variant }) =>
		variant == 'radio' &&
		css`
			width: 1.1em;
			height: 1.1em;
			cursor: pointer;
			
			}
			
		`}
`;

export { Input };
