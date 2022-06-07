import dynamic from 'next/dynamic';
import Head from 'next/head';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

const Map = dynamic(() => import('../src/components/Map/Map'), { ssr: false });

export default function MapPage() {
	return (
		<>
			<Head>
				<title>Karte</title>
				<meta key="title" property="og:title" content="Karte" />
			</Head>
			<PageContainer>
				<Map />
			</PageContainer>
		</>
	);
}
