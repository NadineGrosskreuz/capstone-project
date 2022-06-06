import Footer from '../Footer/Footer';
import Header from '../Header/Header';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			{children}
			<Footer />
		</>
	);
}
