import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Logo from '../../../public/logo.png';
import Typography from '../UI/Typography';
import { HeaderContainer } from '../UI/Header/HeaderContainer.styled';
import { ImageContainer } from '../UI/Header/ImageContainer.styled';
import { NavElementHeader } from '../UI/Header/NavElementHeader.styled';

export default function Header() {
	const router = useRouter();
	return (
		<HeaderContainer>
			<ImageContainer>
				<Link passHref href="/">
					<NavElementHeader aria-label="home" pathName={router.pathname}>
						<Image
							src={Logo}
							alt="Hand, die ein Peacezeichen macht, mit einem Herz dadrüber"
						/>
					</NavElementHeader>
				</Link>
			</ImageContainer>
			<Typography variant="h1">
				{router.pathname === '/'
					? 'Home'
					: router.pathname === '/form'
					? 'Erstellen'
					: router.pathname === '/bookmark'
					? 'Favoriten'
					: 'Karte'}
			</Typography>
		</HeaderContainer>
	);
}
