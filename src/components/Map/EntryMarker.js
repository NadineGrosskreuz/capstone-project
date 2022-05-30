import { Marker, Popup } from 'react-leaflet';
import useStore from '../useStore';

export default function EntryMarker() {
	const entries = useStore(state => state.entries);

	return (
		<>
			{entries.map(entry => {
				return (
					<Marker key={entry.id} position={entry.address}>
						<Popup>
							{entry.category} {entry.name}
						</Popup>
					</Marker>
				);
			})}
		</>
	);
}
