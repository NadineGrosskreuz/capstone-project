import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import * as L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
import LocationMarker from './LocationMarker';

const positions = [
	{ name: 'hier ist was', lat: 52, long: 8 },
	{ name: 'hier ist was anderes', lat: 51, long: 9 },
];

const mapMarker = L.icon({
	iconUrl: 'marker-icon-map.png',
	shadowUrl: 'marker-shadow-map.png',
	iconSize: [25, 41], // size of the icon
	shadowSize: [50, 64], // size of the shadow
	iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
	shadowAnchor: [4, 62], // the same for the shadow
	popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});

export default function Map() {
	return (
		<MapContainer
			scrollWheelZoom
			style={{ height: '100vh', width: '100vh' }}
			center={[51, 10]}
			zoom={10}
		>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>

			{positions.map(position => {
				return (
					<Marker
						key={position.id}
						position={[position.lat, position.long]}
						icon={mapMarker}
					>
						<Popup>{position.name}</Popup>
					</Marker>
				);
			})}
			<LocationMarker />
		</MapContainer>
	);
}
