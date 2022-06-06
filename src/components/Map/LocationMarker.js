import { useState, useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import Typography from '../UI/Typography';

export default function LocationMarker() {
	const [position, setPosition] = useState(null);
	const map = useMapEvents({
		locationfound(e) {
			setPosition(e.latlng);
			map.flyTo(e.latlng, map.getZoom());
		},
	});

	useEffect(() => {
		map.locate();
	}, [map]);

	return position === null ? null : (
		<Marker position={position}>
			<Popup>
				<Typography variant="pPopup">Dein Standort</Typography>
			</Popup>
		</Marker>
	);
}
