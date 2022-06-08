import Link from 'next/link';
import { useRouter } from 'next/router';
import SVGIcon from '../UI/SVG';
import { FooterNav } from '../UI/Footer/FooterNav.styled';
import { NavElementFooter } from '../UI/Footer/NavElementFooter.styled';

export default function Footer() {
	const router = useRouter();
	return (
		<footer>
			<FooterNav>
				<Link passHref href="/">
					<NavElementFooter aria-label="home" pathName={router.pathname}>
						<SVGIcon variant="home" color="var( --secondary-color)" size="33px" />
					</NavElementFooter>
				</Link>
				<Link passHref href="/form">
					<NavElementFooter aria-label="formular" pathName={router.pathname}>
						<SVGIcon variant="form" color="var( --secondary-color)" size="33px" />
					</NavElementFooter>
				</Link>
				<Link passHref href="/bookmark">
					<NavElementFooter aria-label="favoriten" pathName={router.pathname}>
						<SVGIcon variant="heart" color="var( --secondary-color)" size="33px" />
					</NavElementFooter>
				</Link>
				<Link passHref href="/map">
					<NavElementFooter aria-label="karte" pathName={router.pathname}>
						<SVGIcon variant="map" color="var( --secondary-color)" size="33px" />
					</NavElementFooter>
				</Link>
			</FooterNav>
		</footer>
	);
}
