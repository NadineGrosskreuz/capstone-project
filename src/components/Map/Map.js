import { MapContainer, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import 'leaflet-defaulticon-compatibility';
/*import LocationMarker from './LocationMarker';*/
import EntryMarker from './EntryMarker';

/*const positions = [
	{ name: 'hier ist was', lat: 52, long: 8 },
	{ name: 'hier ist was anderes', lat: 51, long: 9 },
];*/

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

			<EntryMarker />
			{/*<LocationMarker />*/}
		</MapContainer>
	);
}
