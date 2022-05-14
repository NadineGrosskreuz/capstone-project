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
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
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
