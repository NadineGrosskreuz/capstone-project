import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Typography from '../UI/Typography';
import { HeaderContainer } from '../UI/Header/HeaderContainer.styled';
import { TitleContainer } from '../UI/Header/TitleContainer.styled';
import { ImageContainer } from '../UI/Header/ImageContainer.styled';

export default function Header() {
	return (
		<HeaderContainer>
			<ImageContainer>
				<Image src={Logo} alt="Hand, die ein Peacezeichen macht, mit einem Herz dadrüber" />
			</ImageContainer>
			<TitleContainer>
				<Typography variant="h1">Home</Typography>
			</TitleContainer>
		</HeaderContainer>
	);
}
