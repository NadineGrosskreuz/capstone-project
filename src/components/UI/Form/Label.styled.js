import styled, { css } from 'styled-components';

const Label = styled.label`
	padding-right: 6px;
	${({ variant }) => variant == 'radio' && css` padding-left: 6px; }`}
	${({ variant }) => variant == 'checkbox' && css` padding-left: 6px;} `}
	${({ variant }) => variant == 'bold' && css` font-weight: bold; }`}
`;

export { Label };
