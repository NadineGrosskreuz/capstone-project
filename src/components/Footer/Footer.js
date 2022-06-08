import Link from 'next/link';
import { useRouter } from 'next/router';
import SVGIcon from '../UI/SVG';
import { FooterNav } from '../UI/Footer/FooterNav.styled';
import { NavElement } from '../UI/Footer/NavElement.styled';

export default function Footer() {
	const router = useRouter();
	return (
		<FooterNav>
			<Link passHref href="/">
				<NavElement aria-label="home" pathName={router.pathname}>
					<SVGIcon variant="home" color="var( --secondary-color)" size="35px" />
				</NavElement>
			</Link>
			<Link passHref href="/form">
				<NavElement aria-label="formular" pathName={router.pathname}>
					<SVGIcon variant="form" color="var( --secondary-color)" size="35px" />
				</NavElement>
			</Link>
			<Link passHref href="/bookmark">
				<NavElement aria-label="favoriten" pathName={router.pathname}>
					<SVGIcon variant="heart" color="var( --secondary-color)" size="35px" />
				</NavElement>
			</Link>
			<Link passHref href="/map">
				<NavElement aria-label="karte" pathName={router.pathname}>
					<SVGIcon variant="map" color="var( --secondary-color)" size="35px" />
				</NavElement>
			</Link>
		</FooterNav>
	);
}
