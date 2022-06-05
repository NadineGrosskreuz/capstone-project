import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Typography from '../UI/Typography';
import { HeaderContainer } from '../UI/Header/HeaderContainer.styled';
import { TitleContainer } from '../UI/Header/TitleContainer.styled';
import { ImageContainer } from '../UI/Header/ImageContainer.styled';
import { useRouter } from 'next/router';

export default function Header() {
	const router = useRouter();
	return (
		<HeaderContainer>
			<ImageContainer>
				<Image src={Logo} alt="Hand, die ein Peacezeichen macht, mit einem Herz dadrüber" />
			</ImageContainer>
			<TitleContainer>
				<Typography variant="h1">
					{router.pathname === '/'
						? 'Home'
						: router.pathname === '/form'
						? 'Erstellen'
						: router.pathname === '/bookmark'
						? 'Favoriten'
						: 'Karte'}
				</Typography>
			</TitleContainer>
		</HeaderContainer>
	);
}
