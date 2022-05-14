import styled from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'h2':
			return (
				<StyledH2 {...rest} as={component}>
					{children}
				</StyledH2>
			);
		default:
			return (
				<StyledP {...rest} as={component}>
					{children}
				</StyledP>
			);
	}
}

const StyledH2 = styled.h2`
	font-size: 2.1rem;
	text-transform: uppercase;
	padding-bottom: 9px;
`;

const StyledP = styled.p`
	font-size: 1.6rem;
	padding-bottom: 12px;
`;
