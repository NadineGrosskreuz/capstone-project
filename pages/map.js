import dynamic from 'next/dynamic';
import HeaderMap from '../src/components/Header/HeaderMap';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

const Map = dynamic(() => import('../src/components/Map/Map'), { ssr: false });

export default function MapPage() {
	return (
		<>
			<HeaderMap />
			<PageContainer>
				<Map />
			</PageContainer>
		</>
	);
}
