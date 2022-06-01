import * as L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import useStore from '../useStore';

const mapMarker = L.icon({
	iconUrl: 'marker-icon-map.png',
	iconSize: [25, 41],
	iconAnchor: [22, 94],
	popupAnchor: [-3, -76],
});

export default function EntryMarker() {
	const entries = useStore(state => state.entries);

	return (
		<>
			{entries.map(entry => {
				return (
					<Marker key={entry.id} position={entry.position} icon={mapMarker}>
						<Popup>
							{entry.category} {entry.name}
						</Popup>
					</Marker>
				);
			})}
		</>
	);
}
