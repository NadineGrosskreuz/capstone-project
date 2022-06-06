import dynamic from 'next/dynamic';
import { PageContainer } from '../src/components/UI/PageContainer.styled';

const Map = dynamic(() => import('../src/components/Map/Map'), { ssr: false });

export default function MapPage() {
	return (
		<PageContainer>
			<Map />
		</PageContainer>
	);
}
