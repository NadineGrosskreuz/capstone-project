import dynamic from 'next/dynamic';
import Header from '../src/components/Header/Header';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

const Map = dynamic(() => import('../src/components/Map/Map'), { ssr: false });

export default function MapPage() {
	return (
		<>
			<Header />
			<PageContainer>
				<Map />
			</PageContainer>
		</>
	);
}
