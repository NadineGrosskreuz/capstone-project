import { getEntries } from '../src/services/get-entry';
import Card from '../src/components/Card/Card';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

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
