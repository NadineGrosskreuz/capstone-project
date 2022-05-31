import * as L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import useStore from '../useStore';

const mapMarker = L.icon({
	iconUrl: 'marker-icon-map.png',
	shadowUrl: 'marker-shadow-map.png',
	iconSize: [25, 41], // size of the icon
	shadowSize: [50, 64], // size of the shadow
	iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62], // the same for the shadow
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

export default function EntryMarker() {
	const entries = useStore(state => state.entries);

	return (
		<>
			{entries.map(entry => {
				console.log(entry);
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
