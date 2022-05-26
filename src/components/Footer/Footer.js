import Link from 'next/link';
import SVGIcon from '../UI/SVG';
import { Button } from '../UI/Button.styled';
import { FooterContainer } from '../UI/Footer/FooterContainer';
import { FooterNav } from '../UI/Footer/FooterNav';

export default function Footer() {
	return (
		<FooterContainer>
			<FooterNav>
				<Link passHref href="/">
					<Button type="button" variant="nav" aria-label="home">
						<SVGIcon variant="home" color="white" size="40px" />
					</Button>
				</Link>
				<Link passHref href="/form">
					<Button type="button" variant="nav" aria-label="formular">
						<SVGIcon variant="form" color="white" size="40px" />
					</Button>
				</Link>
			</FooterNav>
		</FooterContainer>
	);
}
