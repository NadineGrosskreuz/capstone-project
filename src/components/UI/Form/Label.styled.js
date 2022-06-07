import styled, { css } from 'styled-components';

const Label = styled.label`
	${({ variant }) => variant == 'padding' && css`padding: 0 8px 0 5px ;}`}
	${({ variant }) => variant == 'bold' && css` font-weight: bold; }`}
`;

export { Label };
