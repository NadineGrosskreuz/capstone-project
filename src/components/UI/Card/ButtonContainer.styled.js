import styled, { css } from 'styled-components';

const ButtonContainer = styled.div`
	display: flex;
	justify-content: space-between;
	${({ variant }) =>
		variant == 'right' &&
		css`
			justify-content: flex-end;
		`}
`;

export { ButtonContainer };
