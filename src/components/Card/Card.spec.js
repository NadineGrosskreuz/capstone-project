import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Card from './Card';

describe('Card', () => {
	it('renders category,name and address', () => {
		render(
			<Card
				id="1234"
				category="Flohmarkt"
				name="Faust"
				address="Zur Bettfedernfabrik 3, 30451 Hannover"
			/>
		);

		const category = screen.getByText(/Flohmarkt/i);
		const name = screen.getByRole('heading', { name: /Faust/i });
		const address = screen.getByText(/Zur Bettfedernfabrik 3, 30451 Hannover/i);

		expect(category).toBeInTheDocument();
		expect(name).toBeInTheDocument();
		expect(address).toBeInTheDocument();
	});
});
