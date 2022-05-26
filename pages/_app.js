import Layout from '../src/components/Layout/Layout';
import GlobalStyles from '../src/components/UI/GlobalStyles';

function MyApp({ Component, pageProps }) {
	return (
		<>
			<GlobalStyles />
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>
	);
}

export default MyApp;
