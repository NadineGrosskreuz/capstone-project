import Link from 'next/link';
import { useRouter } from 'next/router';
import SVGIcon from '../UI/SVG';
import { Button } from '../UI/Button.styled';
import { FooterContainer } from '../UI/Footer/FooterContainer';
import { FooterNav } from '../UI/Footer/FooterNav';

export default function Footer() {
	const router = useRouter();
	return (
		<FooterContainer>
			<FooterNav>
				<Link passHref href="/">
					<Button
						type="button"
						variant="nav"
						aria-label="home"
						pathName={router.pathname}
					>
						<SVGIcon variant="home" color="#342293" size="40px" />
					</Button>
				</Link>
				<Link passHref href="/form">
					<Button
						type="button"
						variant="nav"
						aria-label="formular"
						pathName={router.pathname}
					>
						<SVGIcon variant="form" color="#342293" size="40px" />
					</Button>
				</Link>
			</FooterNav>
		</FooterContainer>
	);
}
