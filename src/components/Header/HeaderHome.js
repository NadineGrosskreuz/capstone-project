import Image from 'next/image';
import Logo from '../../../public/logo.png';
import Typography from '../UI/Typography';

export default function Header() {
	return (
		<header>
			<Image src={Logo} alt="Hand, die ein Peacezeichen macht, mit einem Herz dadrüber" />
			<Typography variant="h1">Home</Typography>
		</header>
	);
}
