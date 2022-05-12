export default function Card({ entries }) {
	return (
		<>
			<p>{entries.category}</p>
			<h2>{entries.name}</h2>
			<p>{entries.address}</p>
		</>
	);
}
