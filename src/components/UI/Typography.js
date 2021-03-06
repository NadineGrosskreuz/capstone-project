import styled from 'styled-components';

export default function Typography({ children, variant, component, ...rest }) {
	switch (variant) {
		case 'h1':
			return (
				<StyledH1 {...rest} as={component}>
					{children}
				</StyledH1>
			);
		case 'h2':
			return (
				<StyledH2 {...rest} as={component}>
					{children}
				</StyledH2>
			);
		case 'pPopup':
			return (
				<StyledPopup {...rest} as={component}>
					{children}
				</StyledPopup>
			);

		default:
			return (
				<StyledP {...rest} as={component}>
					{children}
				</StyledP>
			);
	}
}

const StyledH1 = styled.h1`
	font-size: 2.5rem;
	text-transform: uppercase;
	color: white;
	align-self: center;
	justify-self: center;
`;

const StyledH2 = styled.h2`
	font-size: 2.1rem;
	text-transform: uppercase;
	padding-bottom: 9px;
`;

const StyledP = styled.p`
	font-size: 1.6rem;
	padding-bottom: 12px;
`;

const StyledPopup = styled.p`
	font-family: Arimo, sans-serif;
	font-size: 1.6rem;
	line-height: 0;
`;
