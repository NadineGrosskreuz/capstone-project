import { getEntries } from '../src/services/get-entry';
import { PageContainer } from '../src/components/UI/PageContainer.styled';
import CardList from '../src/components/CardList/CardList';
import Form from '../src/components/Form/Form';

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
		<PageContainer>
			<Form />
			<CardList entries={entries} />
		</PageContainer>
	);
}
