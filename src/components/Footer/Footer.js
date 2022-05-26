import Link from 'next/link';
import { Button } from '../UI/Button.styled';
import SVGIcon from '../UI/SVG';

export default function Footer() {
	return (
		<footer>
			<Link passHref href="/">
				<Button type="button">
					<SVGIcon variant="home" color="red" />
				</Button>
			</Link>
			<Link passHref href="/form">
				<Button type="button">
					<SVGIcon variant="form" color="red" />
				</Button>
			</Link>
		</footer>
	);
}
