import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import LocationMarker from './LocationMarker';
import EntryMarker from './EntryMarker';

export default function Map() {
	return (
		<MapContainer
			scrollWheelZoom
			style={{ height: '100vh', width: '100vw' }}
			center={[52.5170365, 13.3888599]}
			zoom={13}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<EntryMarker />
			<LocationMarker />
		</MapContainer>
	);
}
