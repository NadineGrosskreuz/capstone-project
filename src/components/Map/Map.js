import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import LocationMarker from './LocationMarker';

const positions = [
	{ name: 'hier ist was', lat: 52, long: 8 },
	{ name: 'hier ist was anderes', lat: 51, long: 9 },
];

export default function Map() {
	return (
		<MapContainer
			scrollWheelZoom
			style={{ height: '530px', width: '350px' }}
			center={[51, 10]}
			zoom={5}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{positions.map(position => {
				return (
					<Marker key={position.id} position={[position.lat, position.long]}>
						<Popup>{position.name}</Popup>
					</Marker>
				);
			})}
			<LocationMarker />
		</MapContainer>
	);
}
