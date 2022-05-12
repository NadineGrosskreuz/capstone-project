import { getEntries } from '../src/services/get-entry';
import Card from '../src/components/Card/Card';

export function getStaticProps() {
	const entries = getEntries();
	return {
		props: {
			entries,
		},
	};
}

export default function Home({ entries }) {
	return <Card entries={entries} />;
}
