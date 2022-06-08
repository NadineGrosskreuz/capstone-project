import * as L from 'leaflet';
import { Marker, Popup } from 'react-leaflet';
import useStore from '../useStore';
import Typography from '../UI/Typography';
import { PopupContainer } from '../UI/Map/PopupContainer.styled';

const mapMarker = L.icon({
	iconUrl: 'map-marker-entry.png',
	iconAnchor: [20, 40],
	popupAnchor: [3, -40],
});

export default function EntryMarker() {
	const entries = useStore(state => state.entries);

	return (
		<>
			{entries.map(entry => {
				return (
					<Marker key={entry.id} position={entry.position} icon={mapMarker}>
						<Popup>
							<PopupContainer>
								<Typography variant="pPopup">{entry.category}</Typography>
								<Typography variant="pPopup">{entry.name}</Typography>
							</PopupContainer>
						</Popup>
					</Marker>
				);
			})}
		</>
	);
}
