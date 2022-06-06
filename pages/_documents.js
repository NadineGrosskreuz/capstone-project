import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static getInitialProps({ renderPage }) {
		const sheet = new ServerStyleSheet();

		const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));

		const styleTags = sheet.getStyleElement();
		return { ...page, styleTags };
	}
	render() {
		return (
			<Html lang="de">
				<Head>
					{this.props.styleTags}
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Arimo&display=swap"
					/>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
