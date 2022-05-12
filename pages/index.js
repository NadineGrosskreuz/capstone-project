import { getEntries } from '../src/services/get-entry';
import Card from '../src/components/Card/Card';
import styled from 'styled-components';

export function getStaticProps() {
	const entries = getEntries();
	return {
		props: {
			entries,
		},
	};
}

export default function Home({ entries }) {
	return (
		<>
			<title>Home</title>
			<PageContainer>
				<Card entries={entries} />;
			</PageContainer>
		</>
	);
}

const PageContainer = styled.main`
	margin: 10px 20px 10px 20px;
`;
